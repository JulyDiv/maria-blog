/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../Main/Main.module.sass";

export const MainLastPost = ({ post }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  //const postText = post.text.substr(0, 200);
  return (
    <>
      <div key={post.id} className={styles.item_top}>
        <img className={styles.img_top} src={post.img} alt="photo" />
        <div className={styles.item_wrapper}>
          <h5 className={styles.title_top}>{post.title}</h5>
          <p className={styles.date_top}>{post.date}</p>
          {post.text ? <p className={styles.text_top}>
            {post.text.length <= 200 ? (
              post.text
            ) : (
              <>
                {post.text.substr(0, 200)}
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
                {showMoreBtn && post.text.substr(200)}
              </>
            )}
          </p> : ""}
        </div>
      </div>
    </>
  );
};
