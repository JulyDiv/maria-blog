/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.sass";
import Link from "next/link";
import axios from "axios";
import { Contacts } from "../Contacts/Contacts";
import { MainPost } from "../MainPost/MainPost";
import { MainLastPost } from "../MainLastPost/MainLastPost";
import { MainSwiper } from "../MainSwiper/MainSwiper";
import { ModalMain } from "../ModalMain/ModalMain";

export const Main = ({ isLogged, posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalMain, setIsModalMain] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get("https://broad-accidental-servant.glitch.me/posts", {})
      .then(({ data }) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

      useEffect(() => {
        const body = document.querySelector("body");
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        body.style.marginRight = isModalMain ? scrollBarWidth : "0";
        body.style.overflow = isModalMain ? "hidden" : "auto";
      }, [isModalMain]);

  //console.log(isModalMain);

  return (
    <>
      <section className={styles.main}>
        <div className={`container`}>
          <div className={styles.wrapper}>
            <div className={styles.posts}>
              <div className={styles.top}>
                <Link href="/blog" className={styles.top_span}>
                  GSR-блог
                </Link>
                <span className={styles.top_line}></span>
              </div>
              {isLoading ? (
                <div className={styles.preloader}>
                  <p className={`${styles.line} ${styles.typewriter}`}>
                    Загружаю...
                  </p>
                </div>
              ) : (
                <div className={styles.main_block}>
                  <div className={styles.posts_wrapper}>
                    {posts
                      .slice(-2)
                      .reverse()
                      .map((post, id) => (
                        <MainLastPost
                          key={id}
                          post={post}
                          isModalMain={isModalMain}
                          setIsModalMain={setIsModalMain}
                        />
                      ))}
                  </div>
                  <div className={styles.swiper}>
                    <MainSwiper
                      posts={posts}
                      isModalMain={isModalMain}
                      setIsModalMain={setIsModalMain}
                    />
                    {/* {isModalMain && (
                      <ModalMain
                        isModalMain={isModalMain}
                        setIsModalMain={setIsModalMain}
                      />
                    )} */}
                  </div>
                  <div className={styles.swiper}>
                    <MainSwiper
                      posts={posts}
                      isModalMain={isModalMain}
                      setIsModalMain={setIsModalMain}
                    />
                    {/* {isModalMain && (
                      <ModalMain
                        isModalMain={isModalMain}
                        setIsModalMain={setIsModalMain}
                      />
                    )} */}
                  </div>
                  {isModalMain && (
                    <ModalMain
                      isModalMain={isModalMain}
                      setIsModalMain={setIsModalMain}
                    />
                  )}
                  {/* <div className={styles.swiper}>
                    <MainSwiper posts={posts} />
                  </div>
                  <div className={styles.swiper}>
                    <MainSwiper posts={posts} />
                  </div> */}
                </div>
              )}
              <div className={styles.block}>
                <Link href="/blog" className={styles.link}>
                  Перейти в GSR-блог
                </Link>
              </div>
            </div>
            <Contacts />
          </div>
        </div>
        {/* <ModalMain /> */}
      </section>
    </>
  );
};
