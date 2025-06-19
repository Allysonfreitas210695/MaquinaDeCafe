import * as S from "./style";
import { IoCartSharp } from "react-icons/io5";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Images } from "../../assets/Images";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface CartItem {
  type: "cafe" | "adicional"; // To distinguish between coffee and add-ons
  id: string; // Unique ID for each item (even for multiple adicionais of the same type)
  title: string | undefined; // Make title potentially undefined if CDetalhe allows
  price: number | undefined; // Make price potentially undefined if CDetalhe allows
  quantity: number;
  name: string;
}

export const Carrinho = () => {
  const [quantity] = useState(0);

  const location = useLocation();
  const { cartItems: initialCartItems } = (location.state ?? {}) as {
    cartItems?: CartItem[];
  };

  const [items, setItems] = useState<CartItem[]>(initialCartItems || []);

  useEffect(() => {
    if (!initialCartItems || initialCartItems.length === 0) {
      console.log("Carrinho vazio ou dados não carregados.");
    }
  }, [initialCartItems]); // Re-run if initialCartItems change

  // Function to handle quantity increment
  const handleIncrementQuantity = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle quantity decrement
  const handleDecrementQuantity = (id: string) => {
    setItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity drops to 0
    );
  };

  // Function to remove an item completely
  const handleRemoveItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to calculate the total price for a single item (quantity * price)
  const calculateItemTotal = (item: CartItem) => {
    if (item.price === undefined) return "0.00"; // Handle undefined price
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <S.Container__Carrinho>
      <S.Carrinho>
        <IoCartSharp className="carrinho" />
      </S.Carrinho>
      <div className="tablela">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "none" }} className="tablecellItens">
                  Itens
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "none" }}
                  className="tablecell"
                >
                  Preço
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "none" }}
                  className="tablecell"
                >
                  Quantidade
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "none" }}
                  className="tablecell"
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ border: "none" }}>
                    Seu carrinho está vazio.
                  </TableCell>
                </TableRow>
              ) : (
                items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ border: "none" }}
                    style={{ border: "none" }}
                  >
                    <TableCell
                      className="table__conteudo"
                      component="th"
                      scope="row"
                      sx={{ border: "none" }}
                    >
                      {row.type === "cafe" ? (
                        <S.TableCellImg
                          src={Images.CafeExpresso}
                          alt={row.title ?? "Café"}
                        />
                      ) : (
                        // You might want a generic image for add-ons or a different one
                        <S.TableCellImg
                          src={Images.Mais}
                          alt={row.title ?? "Adicional"}
                        />
                      )}
                      <S.TableConteudo>
                        <S.TableTitulo>{row.title}</S.TableTitulo>
                        <S.TableButton onClick={() => handleRemoveItem(row.id)}>
                          Remover
                        </S.TableButton>
                      </S.TableConteudo>
                    </TableCell>
                    <TableCell align="center" sx={{ border: "none" }}>
                      R$ {row.price?.toFixed(2) ?? "0.00"}
                    </TableCell>
                    <TableCell align="center" sx={{ border: "none" }}>
                      <S.QuantityControl>
                        <S.Button
                          onClick={() => handleDecrementQuantity(row.id)}
                        >
                          −
                        </S.Button>
                        <S.QuantityDisplay>{quantity}</S.QuantityDisplay>
                        <S.Button
                          onClick={() => handleIncrementQuantity(row.id)}
                        >
                          +
                        </S.Button>
                      </S.QuantityControl>
                    </TableCell>
                    <TableCell align="center" sx={{ border: "none" }}>
                      R$ {calculateItemTotal(row)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <S.carrinhos__Button>
        <S.Button__Personalizacao>
          Voltar para a Aba de Personalização
        </S.Button__Personalizacao>
        <S.Button__Pagamento>Continuar Para o Pagamento</S.Button__Pagamento>
      </S.carrinhos__Button>
    </S.Container__Carrinho>
  );
};
