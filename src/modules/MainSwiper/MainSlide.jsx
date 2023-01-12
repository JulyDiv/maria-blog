import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./MainSwiper.module.sass";

export const MainSlide = ({ post }) => {
    return (
      <>
        <div key={post.id} className={styles.item}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${post.img})` }}
          ></div>
          <div className={styles.info}>
            <h5 className={styles.title}>{post.title}</h5>
            <p className={styles.date}>{post.date}</p>
          </div>
        </div>
      </>
    );
}