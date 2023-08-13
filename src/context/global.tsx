import { createContext, useState } from "react";

// user: any;
// setUser: (user: any) => void;
interface IGlobalContextProps {
  isLoggedIn: boolean;
  setLoginStatus: (isLoggedIn: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

// user: {},
// setUser: () => {},
export const GlobalContext = createContext<IGlobalContextProps>({
  isLoggedIn: false,
  setLoginStatus: () => {},
  setSelectedCategory: () => {},
  selectedCategory: "",
});

export const GlobalContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // user: currentUser,
  // setUser: setCurrentUser,

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoginStatus: setIsLoggedIn,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
