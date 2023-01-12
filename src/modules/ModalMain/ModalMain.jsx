/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styles from "./ModalMain.module.sass";

export const ModalMain = ({ isModalMain, setIsModalMain }) => {
  //const [showMoreBtn, setShowMoreBtn] = useState(false);
    // useEffect(() => {
    //   const body = document.querySelector("body");
    //   const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    //   body.style.marginRight = isModalMain ? scrollBarWidth : "0";
    //   body.style.overflow = isModalMain ? "hidden" : "auto";
    // }, [isModalMain]);
  return (
    <>
      <ModalOverlay />
      <div className={styles.posts}>
        <div className={styles.wrapper}>
          <div key={isModalMain.id} className={styles.main}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${isModalMain.img})` }}
            ></div>
            <div className={styles.block}>
              <h4 className={styles.title}>{isModalMain.title}</h4>
              <span className={styles.span}>{isModalMain.date}</span>
              <p className={styles.text}>{isModalMain.text}</p>
              <div className={styles.block_button}><button className={styles.button} onClick={() => setIsModalMain(false)}>
                Закрыть пост
              </button></div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <div key={isModalMain.id} className={styles.item}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${isModalMain.img})` }}
        ></div>
        <div className={styles.info}>
          <h5 className={styles.title}>{isModalMain.title}</h5>
          <p className={styles.date}>{isModalMain.date}</p>
          <p className={styles.text}>{isModalMain.text}</p>
          {isModalMain.text ? (
            <p className={styles.text}>
              {isModalMain.text.length <= 400 ? (
                isModalMain.text
              ) : (
                <>
                  {isModalMain.text.substr(0, 400)}
                  {!showMoreBtn && (
                    <>
                      <span>...</span>
                      <button
                        className={styles.button}
                        onClick={() => setShowMoreBtn(true)}
                      >
                        Читать дальше
                      </button>
                    </>
                  )}
                  {showMoreBtn && isModalMain.text.substr(400)}
                </>
              )}
            </p>
          ) : (
            ""
          )}
        </div>
        <button onClick={() => setIsModalMain(false)}>Закрыть пост</button>
      </div> */}
    </>
  );
};
