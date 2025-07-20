using System.Text.Json.Serialization;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Data.Persistence;
using MaquinaDeCafe.src.Filters;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Services;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configuração de serviços
builder.Services
    .AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
    })
    .AddJsonOptions(opt => opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddMvc(options => options.Filters.Add(typeof(ExceptionFilter)));
builder.Services.AddHttpContextAccessor();

// Configuração para Azure
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
});

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader()
              .WithExposedHeaders("X-Pagination", "X-TotalCount",
                                 "X-TotalPages", "X-PageSize", "X-CurrentPage");
    });
});

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Injeção de dependência
builder.Services.AddScoped<IAvaliacaoCafeRepository, AvaliacaoCafeService>();
builder.Services.AddScoped<ICafeRepository, CafeService>();
builder.Services.AddScoped<IIngredienteAdicionalRepository, IngredienteAdicionalService>();
builder.Services.AddScoped<IPedidoRepository, PedidoService>(); // Removida a duplicação
builder.Services.AddScoped<ITamanhoXicaraRepository, TamanhoXicaraService>();

var app = builder.Build();

// Middleware pipeline
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseForwardedHeaders();
}

app.UseRouting();
app.UseCors("CorsPolicy");


app.MapControllers();

// Database migration and seeding
try
{
    await MigrateDatabase();
    await SeedDatabase();
}
catch (Exception ex)
{
    app.Logger.LogError(ex, "Erro durante migração ou seed do banco de dados");
    throw;
}

app.Run();

async Task MigrateDatabase()
{
    using var scope = app.Services.CreateScope();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        logger.LogInformation("Iniciando migração do banco de dados...");
        await DataBaseMigration.MigrateDatabase(scope.ServiceProvider);
        logger.LogInformation("Migração concluída com sucesso");
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Erro durante a migração do banco de dados");
        throw;
    }
}

async Task SeedDatabase()
{
    using var scope = app.Services.CreateScope();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        logger.LogInformation("Iniciando seed do banco de dados...");
        await SeedDatabaseInitial.Seeds(scope.ServiceProvider);
        logger.LogInformation("Seed concluído com sucesso");
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Erro durante o seed do banco de dados");
        throw;
    }
}