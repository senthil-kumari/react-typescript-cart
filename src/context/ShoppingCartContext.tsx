import { createContext, useContext, useState, type ReactNode } from "react";
import { ShoppingCart } from "../components/ShoppingCArt";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCardProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getCartQuantity: number;
  cartItems: CartItem[];
  isCartOpen: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === undefined) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  }

  const getCartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        getCartQuantity,
        openCart,
        closeCart,
        isCartOpen,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
