/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Posts.module.sass";
import axios from "axios";

export const Posts = ({ post, isLogged }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);

  const onDelete = (data) => {
    console.log(data);
    axios
      .delete(`https://broad-accidental-servant.glitch.me/posts/${post.id}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  //console.log(post);

  return (
    <>
      <div className={styles.posts}>
        <div className={`container`}>
          <div className={styles.wrapper}>
            <div key={post.id} className={styles.main}>
              <img
                className={styles.main_img}
                src={post.img}
                alt="photo: post"
              />
              <div className={styles.block}>
                {!isLogged && (
                  <button className={""} onClick={() => onDelete()}>
                    Удалить пост
                  </button>
                )}
                <h4 className={styles.title}>{post.title}</h4>
                <span className={styles.span}>{post.date}</span>
                <p className={styles.text}>
                  {post.text.length <= 700 ? (
                    post.text
                  ) : (
                    <>
                      {post.text.substr(0, 700)}
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
                      {showMoreBtn && post.text.substr(700)}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.posts}>
        <div className={`container`}>
          <div className={styles.wrapper}>
            <div key={post.id} className={styles.main}>
              <img
                className={styles.main_img}
                src={post.img}
                alt="photo: post"
              />
              <div className={styles.block}>
                {isLogged && <button className={""} onClick={() => onDelete()}>
                  Удалить пост
                </button>}
                <h4 className={styles.title}>{post.title}</h4>
                <span className={styles.span}>{post.date}</span>
                <p className={styles.text}>
                  {post.text.length <= 700
                    ? post.text
                    : post.text.substr(0, 700)}
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
                  {showMoreBtn && post.text.substr(700)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
