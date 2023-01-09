import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  //const [logins, setLogins] = useState(`${process.env.NEXT_PUBLIC_LOGIN}`);
  //const [passwords, setPasswords] = useState(`${process.env.NEXT_PUBLIC_PASSWORD}`);
  //const env = process.env;
  const [logins, setLogins] = useState(process.env.NEXT_PUBLIC_LOGIN);
  const [passwords, setPasswords] = useState(process.env.NEXT_PUBLIC_PASSWORD);
  console.log(logins);
  console.log(passwords);

  const [isLogged, setIsLogged] = useState("");

  useEffect(() => {
    setIsLogged(
      window.localStorage.getItem("logins") &&
        window.localStorage.getItem("passwords")
    );
  }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem("logins", logins);
  //   }, [logins]);

  //     useEffect(() => {
  //       window.localStorage.setItem("passwords", passwords);
  //     }, [passwords]);

  const contextValue = {
    isLogged,
    setIsLogged,
    logins,
    setLogins,
    passwords,
    setPasswords,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
