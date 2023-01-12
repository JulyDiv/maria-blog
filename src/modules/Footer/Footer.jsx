import React from "react";
import styles from "./Footer.module.sass";
import Link from "next/link";

export const Footer = () => {
    return (
      <>
        <footer className={styles.footer}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.link}>
                <Link href="/" className={styles.link_item}>
                  Главная
                </Link>
                <Link
                  href="/"
                  className={`${styles.link_item} ${styles.link_item_hidden}`}
                >
                  Проекты
                </Link>
                <Link
                  href="/"
                  className={`${styles.link_item} ${styles.link_item_hidden}`}
                >
                  Услуги
                </Link>
                <Link
                  href="/"
                  className={`${styles.link_item} ${styles.link_item_hidden}`}
                >
                  Кейсы
                </Link>
                <Link href="/blog" className={styles.link_item}>
                  GSR-блог
                </Link>
              </div>
            </div>
            <h1 className={styles.title}>Maria Gonza</h1>
            <div className={styles.right}>
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
            </div>
          </div>
        </footer>
      </>
    );
}