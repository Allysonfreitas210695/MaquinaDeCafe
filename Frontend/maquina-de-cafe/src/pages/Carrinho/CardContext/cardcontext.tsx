// src/context/CartContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { Adicional, ITamanhoXicaraProps } from '../../../Service/interface';

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
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
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
    return cart.reduce((total, item) => total + (item.valorTotalItem * item.quantidadeNoCarrinho), 0);
  };

  const getServiceFee = () => {
    return getCartSubtotal() * 0.10;
  };

  const getCartTotal = () => {
    return getCartSubtotal() + getServiceFee();
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateItemQuantity,
      clearCart,
      getCartSubtotal,
      getServiceFee,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};