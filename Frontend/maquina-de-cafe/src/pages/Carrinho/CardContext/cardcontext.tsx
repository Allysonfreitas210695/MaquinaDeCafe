// src/context/CartContext.tsx
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
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
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartSubtotal: () => number;
  getServiceFee: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Inicializa o carrinho tentando carregar do localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem("coffee_cart");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Erro ao carregar carrinho do localStorage:", error);
      return [];
    }
  });

  // Salva o carrinho no localStorage sempre que ele muda
  useEffect(() => {
    try {
      localStorage.setItem("coffee_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Erro ao salvar carrinho no localStorage:", error);
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
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

  const getCartSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.valorTotalItem * item.quantidadeNoCarrinho,
      0
    );
  };

  const getServiceFee = () => {
    return getCartSubtotal() * 0.1;
  };

  const getCartTotal = () => {
    return getCartSubtotal() + getServiceFee();
  };

  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateItemQuantity,
      clearCart,
      getCartSubtotal,
      getServiceFee,
      getCartTotal,
    }),
    [cart]
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
