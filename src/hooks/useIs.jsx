import { useState } from "react";

export function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false);
  return { isLogin, setIsLogin };
}

export function useIsLogged() {
  const [isLogged, setIsLogged] = useState(false);
  return { isLogged, setIsLogged };
}

export function useIsLoading() {
  const [isLoading, setIsLoading] = useState(false);
  return { isLoading, setIsLoading };
}