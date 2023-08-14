import { createContext, useState } from "react";
import { Product } from "@/types/Catalog";

interface IGlobalContextProps {
  isLoggedIn: boolean;
  setLoginStatus: (isLoggedIn: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  productDetailsItem: Product;
  setProductDetailsItem: (productDetailsItem: Product) => void;
}

const productDetailsItemInitialValue = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export const GlobalContext = createContext<IGlobalContextProps>({
  isLoggedIn: false,
  setLoginStatus: () => {},
  setSelectedCategory: () => {},
  setProductDetailsItem: () => {},
  selectedCategory: "",
  productDetailsItem: productDetailsItemInitialValue,
});

export const GlobalContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productDetailsItem, setProductDetailsItem] = useState(productDetailsItemInitialValue);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoginStatus: setIsLoggedIn,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        productDetailsItem: productDetailsItem,
        setProductDetailsItem: setProductDetailsItem,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
