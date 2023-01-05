import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const Login = ({ setIsLogged, setIsLogin }) => {
  const [logins, setLogins] = useState("admin");
  const [passwords, setPasswords] = useState("a");
  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { login: valueLogin, password: valuePassword },
  });
  const onSubmit = (data) => {
    const { login, password } = data;
    if (login === logins && password === passwords) {
      setIsLogged(true);
      reset();
    } else {
      alert("Incorrect username and password");
    }
    setIsLogin(false);
  };

  // useEffect(() => {
    
  //   return () => {
      
  //   };
  // }, []);
  return (
    <>
      <div>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("login")}
            type="text"
            style={{ border: "1px solid black" }}
          />
          <input
            {...register("password")}
            type="text"
            style={{ border: "1px solid black" }}
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </>
  );
};
