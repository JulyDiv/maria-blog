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
            <div className={styles.right}>
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
            </div>
          </div>
        </footer>
      </>
    );
}