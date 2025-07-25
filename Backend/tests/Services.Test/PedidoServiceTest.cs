using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;

public class PedidoServiceTest
{
    private readonly PedidoService _service;
    private readonly ApplicationDbContext _dbContext;

    public PedidoServiceTest()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
            .Options;

        _dbContext = new ApplicationDbContext(options);
        _service = new PedidoService(_dbContext);
    }

    public void Dispose()
    {
        _dbContext.Database.EnsureDeleted();
        _dbContext.Dispose();
    }
}