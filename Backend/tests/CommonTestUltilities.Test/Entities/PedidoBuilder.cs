using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public class PedidoBuilder
{
    public static Pedido Build(
        Guid? id = null,
        Cafe? cafe = null,
        TipoLeite? tipoLeite = null,
        TipoAcucar? tipoAcucar = null,
        TamanhoXicara? tamanhoXicara = null,
        int? quantidade = null,
        FormaPreparo? formaPreparo = null,
        List<IngredienteAdicional>? ingredientesAdicionais = null,
        bool? produtoDisponivel = null
    )
    {
        var faker = new Faker("pt_BR");

        var cafeFinal = cafe ?? CafeBuilder.Build();

        var formaPreparoFinal = formaPreparo ?? FormaPreparoBuilder.Build(); 

        var ingredientesFinal = ingredientesAdicionais ?? new List<IngredienteAdicional>
        {
             IngredienteAdicionalBuilder.Build(),
             IngredienteAdicionalBuilder.Build()
        };

        return new Pedido(
            id: id,
            cafe: cafeFinal,
            tipoLeite: tipoLeite ?? faker.PickRandom<TipoLeite>(),
            tipoAcucar: tipoAcucar ?? faker.PickRandom<TipoAcucar>(),
            tamanhoXicara: tamanhoXicara ?? faker.PickRandom<TamanhoXicara>(),
            quantidade: quantidade ?? faker.Random.Int(1, 5),
            formaPreparo: formaPreparoFinal,
            ingredientesAdicionais: ingredientesFinal,
            produtoDisponivel: produtoDisponivel ?? true
        );
    }
}
