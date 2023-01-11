import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";

export const Navbar = ({
  setIsLogin,
  isLogged,
  isLogin,
  setIsLogged,
  setIsModalPost,
}) => {

  const [isButtonMobile, setIsButtonMobile] = useState(false);

  const onClick = () => {
    setIsLogged(localStorage.clear());
    window.location.reload();
    setIsLogin(false);
    setIsModalPost(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.link}>
              <Link href="/" className={styles.link_item}>
                Главная
              </Link>
              <Link
                href="/"
                className={`${styles.link_item} ${styles.link_item_hidden}`}
              >
                Проекты
              </Link>
              <Link
                href="/"
                className={`${styles.link_item} ${styles.link_item_hidden}`}
              >
                Услуги
              </Link>
              <Link href="/" className={`${styles.link_item} ${styles.link_item_hidden}`}>
                Кейсы
              </Link>
              <Link href="/blog" className={styles.link_item}>
                GSR-блог
              </Link>
            </div>
            {isLogged ? (
              <>
                <button className={styles.button} onClick={() => onClick()}>
                  Logout
                </button>
              </>
            ) : (
              <button
                className={styles.button}
                onClick={() => (isLogin ? setIsLogin(false) : setIsLogin(true))}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
