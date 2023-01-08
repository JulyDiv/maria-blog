/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../Main/Main.module.sass";

export const MainPost = ({ posts }) => {
  function getRandomItems(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const randomItem = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = randomItem;
    }
    return arr;
  }
  const random = getRandomItems(posts);
  return (
    <>
      {random.slice(0, 4).map((item) => (
        <div key={item.id} className={styles.item_bottom}>
          <img className={styles.img_bottom} src={item.img} alt="photo" />
          <div className={styles.info}>
            <h5 className={styles.title_bottom}>{item.title}</h5>
            <p className={styles.date_bottom}>{item.date}</p>
          </div>
        </div>
      ))}
      {/* {posts
          .slice(-2)
          .reverse()
          .map(({ id, title, text, date, img }) => (
            <div key={id} className={styles.item_top}>
              <img className={styles.img_top} src={img} alt="photo" />
              <div className={styles.item_wrapper}>
                <h5 className={styles.title_top}>{title}</h5>
                <p className={styles.date_top}>{date}</p>
                <p className={styles.text_top}>{text}</p>
              </div>
            </div>
          ))} */}
    </>
  );
};
