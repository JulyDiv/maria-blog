/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../Main/Main.module.sass";
import { ModalMain } from "../ModalMain/ModalMain";

export const MainLastPost = ({ post, isModalMain, setIsModalMain }) => {
  //const [showMoreBtn, setShowMoreBtn] = useState(false);
  //const postText = post.text.substr(0, 200);
  const onClick = () => {
    setIsModalMain(true);
    setIsModalMain(post);
  };
  return (
    <>
      <div key={post.id} className={styles.item_top}>
        <div
          className={styles.img_top}
          style={{ backgroundImage: `url(${post.img})` }}
        ></div>
        <div className={styles.item_wrapper}>
          <h5 className={styles.title_top}>{post.title}</h5>
          <p className={styles.date_top}>{post.date}</p>
          <p className={styles.text_top}>{post.text}</p>
          <button className={styles.button} onClick={() => onClick()}>
            Читать дальше
          </button>
        </div>
      </div>
      {/* {isModalMain && <ModalMain post={post} isModalMain={isModalMain} setIsModalMain={setIsModalMain} />} */}
    </>
  );
};
