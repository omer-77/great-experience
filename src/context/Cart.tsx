import { createContext, useEffect, useState } from "react";
import { CartItem } from "@/types/Catalog";

interface ICartContextProps {
  cartItems: CartItem[];
  itemsCount: number;
  addItem: (product: CartItem) => void;
  deleteItem: (productId: number) => void;
  editItem: (id: number, count: number) => void;
}

export const CartContext = createContext<ICartContextProps>({
  cartItems: [],
  itemsCount: 0,
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
});

export const CartContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    calculateCartItemsCount();
  }, [cartItems]);

  const addItem = (cartItemToAdd: CartItem) => {
    const indexOfItem = cartItems.findIndex(cartItem => cartItem.item.id === cartItemToAdd.item.id);

    if (indexOfItem !== -1) {
      const swapArray = [...cartItems];

      swapArray[indexOfItem].count += cartItemToAdd.count;

      setCartItems(swapArray);
    } else {
      const newItemsArray = [...cartItems];
      newItemsArray.push(cartItemToAdd);

      setCartItems(newItemsArray);
    }
  };

  const deleteItem = (productId: number) => {
    const filteredItems = cartItems.filter(cartItem => cartItem.item.id !== productId);

    setCartItems(filteredItems);
  };

  const editItem = (id: number, count: number) => {
    const indexOfItem = cartItems.findIndex(cartItem => cartItem.item.id === id);

    if (indexOfItem !== -1) {
      const swapArray = [...cartItems];

      swapArray[indexOfItem].count = count;

      setCartItems(swapArray);
    }
  };

  const calculateCartItemsCount = () => {
    const totalCount = cartItems.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.count;
    }, 0);

    setItemsCount(totalCount);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsCount,
        addItem,
        deleteItem,
        editItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
