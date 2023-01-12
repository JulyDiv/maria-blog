import React from "react";
import Link from "next/link";
import styles from "./Contacts.module.sass";

export const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.icon}>
          <Link
            href="t.me/gonzaingsr"
            className={`${styles.icon_item} ${styles.icon_item_telegram}`}
          ></Link>
          <Link
            href="https://www.instagram.com/invites/contact/?i=nx4wjxay5jn7&utm_content=qaxey22"
            className={`${styles.icon_item} ${styles.icon_item_instagram}`}
          ></Link>
          <Link
            href="https://www.youtube.com/@mariagonzaa"
            className={`${styles.icon_item} ${styles.icon_item_youtube}`}
          ></Link>
        </div>
        <div className={styles.target}>
          <p className={styles.target_text}>Тут может быть твоя реклама</p>
        </div>
      </div>
    </>
  );
};
