/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Login } from "../Login/Login";

export const Header = ({ setIsLogin, isLogged, isLogin, setIsLogged }) => {

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="container">
            <div className="top">
              <img src="/img/logo.png" alt="logo" className="top__logo" />
              <div className="top__news">
                <div className="top-wrapper">
                  <h4 className="top__title">
                    Разработка сайтов и Web-приложений
                  </h4>
                  <p className="top__text">Под ключ/Уникальный крутой дизайн</p>
                  <Link
                    href="https://t.me/julia_gerber"
                    className="top__link"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-wrapper">
                <div className="navbar-link">
                  <Link href="/" className="navbar-link__item">
                    Обо мне
                  </Link>
                  <Link href="/blog" className="navbar-link__item">
                    Мой Блог
                  </Link>
                  <Link href="/" className="navbar-link__item">
                    Услуги
                  </Link>
                  <Link href="/" className="navbar-link__item">
                    Кейсы
                  </Link>
                  <Link href="/" className="navbar-link__item">
                    Проекты
                  </Link>
                </div>
                {isLogin && (
                  <Login
                    setIsLogin={setIsLogin}
                    setIsLogged={setIsLogged}
                  />
                )}
                {isLogged ? (
                  <button
                    className="navbar-login__button"
                    onClick={() => setIsLogged(false)}
                  >
                    Я дома
                  </button>
                ) : (
                  <button
                    className="navbar-login__button"
                    onClick={() => setIsLogin(true)}
                  >
                    Моя кнопка
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
