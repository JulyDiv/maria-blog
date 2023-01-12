/* eslint-disable @next/next/no-img-element */
import React from "react";
//import styles from "../Main/Main.module.sass";
import styles from "../MainPost/MainPost.module.sass";

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
        <div key={item.id} className={styles.item}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className={styles.info}>
            <h5 className={styles.title}>{item.title}</h5>
            <p className={styles.date}>{item.date}</p>
          </div>
        </div>
      ))}
      {/* {random.slice(0, 4).map((item) => (
        <div key={item.id} className={styles.item_bottom}>
          <div
            className={styles.img_bottom}
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className={styles.info}>
            <h5 className={styles.title_bottom}>{item.title}</h5>
            <p className={styles.date_bottom}>{item.date}</p>
          </div>
        </div>
      ))} */}
    </>
  );
};
