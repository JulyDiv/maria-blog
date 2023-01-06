import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";

export const Navbar = ({ setIsLogin, isLogged, isLogin, setIsLogged }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.link}>
              <Link href="/" className={styles.link_item}>
                Обо мне
              </Link>
              <Link href="/" className={styles.link_item}>
                Проекты
              </Link>
              <Link href="/" className={styles.link_item}>
                Услуги
              </Link>
              <Link href="/" className={styles.link_item}>
                Кейсы
              </Link>
              <Link href="/blog" className={styles.link_item}>
                GSR-блог
              </Link>
            </div>
            {isLogged ? (
              <>
                <button
                  className={styles.button}
                  onClick={() => setIsLogged(false)}
                >
                  Я дома
                </button>
              </>
            ) : (
              <button
                className={styles.button}
                onClick={() => setIsLogin(true)}
              >
                Моя кнопка
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
