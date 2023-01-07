/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.sass";
import { Login } from "../Login/Login";
import { ModalPost } from "../ModalPost/ModalPost";
import { Navbar } from "../Navbar/Navbar";

export const Header = ({ setIsLogin, isLogged, isLogin, setIsLogged }) => {
  //const [title, setTitle] = useState("");
  //const [text, setText] = useState("");
  //const [date, setDate] = useState("");
  const [isModalPost, setIsModalPost] = useState(false);
  const [imgs, setImgs] = useState("");
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Maria Gonza</h1>
            <div className={styles.news}>
              <h4 className={styles.news_title}>
                Разработка сайтов и Web-приложений
              </h4>
              <p className={styles.news_text}>
                Под ключ/Уникальный крутой дизайн
              </p>
              <Link
                href="https://t.me/julia_gerber"
                className={styles.news_link}
              ></Link>
              <span className={styles.news_span}>Напиши мне</span>
            </div>
          </div>
        </div>
        <Navbar
          isLogin={isLogin}
          isLogged={isLogged}
          setIsLogin={setIsLogin}
          setIsLogged={setIsLogged}
          setIsModalPost={setIsModalPost}
        />
      </header>
      {isLogin && <Login setIsLogin={setIsLogin} setIsLogged={setIsLogged} />}
      {/* <ModalPost
        imgs={imgs}
        setImgs={setImgs}
      /> */}
      {isLogged ? (
        <div className={styles.block}>
          <button
            className={styles.button}
            onClick={() =>
              isModalPost ? setIsModalPost(false) : setIsModalPost(true)
            }
            //onClick={() => setIsModalPost(true)}
          >
            {isModalPost ? "Закрыть панель" : "Открыть панель"}
          </button>
        </div>
      ) : (
        ""
      )}
      {isModalPost && (
        <ModalPost
          imgs={imgs}
          setImgs={setImgs}
          setIsModalPost={setIsModalPost}
        />
      )}
      {/* {isLogged && (
        <ModalPost
          imgs={imgs}
          setImgs={setImgs}
        />
      )} */}
    </>
  );
};
