import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppWrapper = ({ children }) => {

  const [logins, setLogins] = useState(process.env.NEXT_PUBLIC_LOGIN);
  const [passwords, setPasswords] = useState(process.env.NEXT_PUBLIC_PASSWORD);
  const [isLoader, setIsLoader] = useState(true);

  const [isLogged, setIsLogged] = useState("");

  useEffect(() => {
    setIsLogged(
      window.localStorage.getItem("logins") &&
        window.localStorage.getItem("passwords")
    );
  }, []);

  useEffect(() => {
    window.sessionStorage.getItem("isloader");
  }, []);

  useEffect(() => {
    sessionStorage.setItem("isLoader", "false");
    // if (sessionStorage.getItem("isloader") == true) {
    //   setIsLoader(false);
    // }
  }, []);

  const contextValue = {
    isLogged,
    setIsLogged,
    logins,
    setLogins,
    passwords,
    setPasswords,
    isLoader,
    setIsLoader,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
