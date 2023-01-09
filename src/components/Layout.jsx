import React from "react";
import { useIsLogin } from "../hooks/useIs";
import { useIsLogged } from "../hooks/useIs";
import { Header } from "../modules/Header/Header";
//import { Footer } from "../modules/Footer/Footer";

export const Layout = ({ children }) => {
  const isLogin = useIsLogin();
  //const isLogged = useIsLogged();
  return (
    <>
      <Header {...isLogin} />
      {children}
      {/* <Footer /> */}
    </>
  );
};
