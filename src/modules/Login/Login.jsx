import React, { useState, useEffect, useContext } from "react";
import styles from "./Login.module.sass";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";

export const Login = ({ setIsLogged, setIsLogin }) => {

  const [error, setError] = useState(false)
  const { logins, passwords } = useContext(AppContext);
  // const [logins, setLogins] = useState(`${process.env.NEXT_PUBLIC_LOGIN}`);
  // const [passwords, setPasswords] = useState(`${process.env.NEXT_PUBLIC_PASSWORD}`);

  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur" });
//if (login === logins && password === passwords)
  const onSubmit = (data) => {
    const { login, password } = data;
    if (login === logins && password === passwords) {
      setIsLogged(true);
      setIsLogin(false);
      localStorage.setItem("logins", JSON.stringify(logins));
      localStorage.setItem("passwords", JSON.stringify(passwords));
      //reset();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Вход</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("login")}
              type="text"
              className={styles.input}
              placeholder="Логин"
            />
            <input
              {...register("password")}
              type="password"
              className={styles.input}
              placeholder="Пароль"
            />
            {error && <span className={styles.span}>Неверные данные</span>}
            <button className={styles.button} type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
