import React, { useState, useEffect } from "react";
import styles from "./Login.module.sass";
import { useForm } from "react-hook-form";

export const Login = ({ setIsLogged, setIsLogin }) => {

  const [error, setError] = useState(false)
  const [logins, setLogins] = useState(`${process.env.NEXT_PUBLIC_LOGIN}`);
  const [passwords, setPasswords] = useState(`${process.env.NEXT_PUBLIC_PASSWORD}`);

  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur" });

  const onSubmit = (data) => {
    const { login, password } = data;
    if (login === logins && password === passwords) {
      setIsLogged(true);
      setIsLogin(false);
      reset();
    } else {
      setError(true);
    }
  };

  // useEffect(() => {
  //   const logins = localStorage.logins ? JSON.parse(localStorage.logins) : [];
  //   if (logins !== null) {
  //     setLogins(logins);
  //   }
  // }, [setLogins]);
  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.logins = JSON.stringify(logins);
  //   });
  //   return () => {
  //     window.removeEventListener("beforeunload", () => {
  //       localStorage.logins = JSON.stringify(logins);
  //     });
  //   };
  // }, [logins]);

  //   useEffect(() => {
  //     const passwords = localStorage.passwords ? JSON.parse(localStorage.passwords) : [];
  //     if (passwords !== null) {
  //       setPasswords(passwords);
  //     }
  //   }, [setPasswords]);
  //   useEffect(() => {
  //     window.addEventListener("beforeunload", () => {
  //       localStorage.passwords = JSON.stringify(passwords);
  //     });
  //     return () => {
  //       window.removeEventListener("beforeunload", () => {
  //         localStorage.passwords = JSON.stringify(passwords);
  //       });
  //     };
  //   }, [passwords]);

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
