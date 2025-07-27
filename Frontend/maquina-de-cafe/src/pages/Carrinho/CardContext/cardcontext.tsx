import {
  createContext,
  useState,
  useContext,
  ReactNode, // Keep ReactNode imported as we'll use it
  useEffect,
  useMemo,
} from "react";
// Certifique-se de que os caminhos para Adicional e ITamanhoXicaraProps estão corretos
import { Adicional, ITamanhoXicaraProps } from "../../../service/interface";

export interface CartItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  preparation: number;
  imageSrc?: string;
  tamanhoSelecionado: ITamanhoXicaraProps;
  adicionaisSelecionados: Adicional[];
  quantidadeNoCarrinho: number;
  valorTotalItem: number; 
  tipoLeite?: string;
  tipoAcucar?: string;
  observacao?: string;
  nome?: string;
  ml?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Corrected line for CartProvider props
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem("coffee_cart");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Erro ao carregar carrinho do localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("coffee_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Erro ao salvar carrinho no localStorage:", error);
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (i) => i.id === item.id && 
                 i.tamanhoSelecionado?.id === item.tamanhoSelecionado?.id &&
                 JSON.stringify(i.adicionaisSelecionados) === JSON.stringify(item.adicionaisSelecionados) &&
                 i.tipoLeite === item.tipoLeite && 
                 i.tipoAcucar === item.tipoAcucar
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantidadeNoCarrinho: existingItem.quantidadeNoCarrinho + item.quantidadeNoCarrinho,
        };
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantidadeNoCarrinho: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = useMemo(() => {
    return () => cart.reduce(
      (total, item) => total + item.valorTotalItem * item.quantidadeNoCarrinho,
      0
    );
  }, [cart]);

  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateItemQuantity,
      clearCart,
      getCartTotal,
    }),
    [cart, getCartTotal]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};