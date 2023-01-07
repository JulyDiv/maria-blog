import React, { useState, useEffect } from "react";
import styles from "./Login.module.sass";
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
      setIsLogin(false);
    }
    setIsLogin(false);
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
            <button className={styles.button} type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
