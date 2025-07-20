using System.Text.Json.Serialization;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Data.Persistence;
using MaquinaDeCafe.src.Filters;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// -------------------- Configuração de Serviços --------------------

builder.Services
    .AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
    })
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

builder.Services.AddRouting(options => options.LowercaseUrls = true);

builder.Services.AddMvc(options => options.Filters.Add(typeof(ExceptionFilter)));

builder.Services.AddHttpContextAccessor();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", cors =>
    {
        cors.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithExposedHeaders("X-Pagination", "X-TotalCount", "X-TotalPages", "X-PageSize", "X-CurrentPage");
    });
});

// -------------------- Banco de Dados --------------------

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// -------------------- Injeção de Dependência --------------------

builder.Services.AddScoped<IAvaliacaoCafeRepository, AvaliacaoCafeService>();
builder.Services.AddScoped<ICafeRepository, CafeService>();
builder.Services.AddScoped<IIngredienteAdicionalRepository, IngredienteAdicionalService>();
builder.Services.AddScoped<IPedidoRepository, PedidoService>();
builder.Services.AddScoped<ITamanhoXicaraRepository, TamanhoXicaraService>();

// -------------------- Swagger --------------------

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// -------------------- Ajuste para Azure App Service --------------------

builder.WebHost.UseUrls("http://+:80");

// -------------------- Pipeline HTTP --------------------

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("CorsPolicy");

app.MapControllers();

// Rota de teste para verificar se o app está vivo
app.MapGet("/", () => "☕ API Máquina de Café no ar!");

// -------------------- Opcional: Migrations/Seed --------------------
// await MigrateDatabase();
// await SeedDatabase();

app.Run();


// async Task MigrateDatabase()
// {
//     await using var scope = app.Services.CreateAsyncScope();
//     await DataBaseMigration.MigrateDatabase(scope.ServiceProvider);
// }

// async Task SeedDatabase()
// {
//     await using var scope = app.Services.CreateAsyncScope();
//     await SeedDatabaseInitial.Seeds(scope.ServiceProvider);
// }
