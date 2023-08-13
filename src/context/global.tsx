import { createContext, useState } from "react";

interface IGlobalContextProps {
  user: any;
  isLoggedIn: boolean;
  setUser: (user: any) => void;
  setLoginStatus: (isLoggedIn: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  user: {},
  isLoggedIn: false,
  setUser: () => {},
  setLoginStatus: () => {},
});

export const GlobalContextProvider = (props: { children: React.ReactElement<any, any> }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        isLoggedIn: isLoggedIn,
        setUser: setCurrentUser,
        setLoginStatus: setIsLoggedIn,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
