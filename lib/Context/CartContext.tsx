import { createContext, useEffect, useState, ReactNode } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cartProducts: string[];
  setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartProducts: [],
  setCartProducts: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')!));
    }
  }, [ls]);

  const addProduct = (productId: string) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  const removeProduct = (productId: string) => {
    setCartProducts((prev) => {
      const position = prev.indexOf(productId);

      if (position !== -1) {
        return prev.filter((value, index) => index !== position);
      }

      return prev;
    });
  };

  const clearCart = () => {
    if (ls) {
      ls.removeItem('cart');
    }

    setCartProducts([]);
  };

  const contextValue: CartContextProps = {
    cartProducts,
    setCartProducts,
    addProduct,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
