import React from "react";
import Link from "next/link";
import styles from "./Contacts.module.sass";

export const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.icon}>
          <Link
            href="https://t.me/mariagonzaaa"
            className={`${styles.icon_item} ${styles.icon_item_telegram}`}
          ></Link>
          <Link
            href="https://instagram.com/gonzabutterfly?igshid=YmMyMTA2M2Y="
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
