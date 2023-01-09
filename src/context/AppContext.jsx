import { createContext } from "react";

const AppContext = createContext();

const AppWrapper = ({ children, isLogged, setIsLogged }) => {

  const contextValue = {
    isLogged,
    setIsLogged
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
