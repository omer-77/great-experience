import { createContext, useState } from "react";
import { Product } from "@/types/Catalog";

type cartItem = {
  count: number;
  item: Product;
};

interface ICartContextProps {
  cartItems: cartItem[];
  addItem: (product: cartItem) => void;
  deleteItem: (productId: number) => void;
  editItem: (id: number, count: number) => void;
}

export const CartContext = createContext<ICartContextProps>({
  cartItems: [],
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
});

export const CartContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [cartItems, setCartItems] = useState<Array<cartItem>>([]);

  const addItem = (cartItemToAdd: cartItem) => {
    const indexOfItem = cartItems.findIndex(cartItem => cartItem.item.id === cartItemToAdd.item.id);

    if (indexOfItem !== -1) {
      cartItems[indexOfItem].count += cartItemToAdd.count;

      return;
    }

    const newItemsArray = [...cartItems, cartItemToAdd];

    setCartItems(newItemsArray);
  };

  const deleteItem = (productId: number) => {
    const filteredItems = cartItems.filter(cartItem => cartItem.item.id !== productId);

    setCartItems(filteredItems);
  };

  const editItem = (id: number, count: number) => {
    const indexOfItem = cartItems.findIndex(cartItem => cartItem.item.id === id);

    if (indexOfItem !== -1) {
      const array = [...cartItems];
      
      array[indexOfItem].count = count;

      setCartItems(array);

    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        deleteItem,
        editItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
