import { createContext, useState } from "react";

interface IGlobalContextProps {
  isLoggedIn: boolean;
  setLoginStatus: (isLoggedIn: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  isLoggedIn: false,
  setLoginStatus: () => {},
  setSelectedCategory: () => {},
  selectedCategory: "",
});

export const GlobalContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setLoginStatus: setIsLoggedIn,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
