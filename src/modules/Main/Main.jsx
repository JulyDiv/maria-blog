/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.sass";
import Link from "next/link";
import axios from "axios";
import { Contacts } from "../Contacts/Contacts";
import { MainPost } from "../MainPost/MainPost";
import { MainLastPost } from "../MainLastPost/MainLastPost";

export const Main = ({ isLogged, posts, setPosts }) => {

  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get("https://broad-accidental-servant.glitch.me/postsы", {})
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
                <>
                  <div className={styles.posts_wrapper}>
                    {posts
                      .slice(-2)
                      .reverse()
                      .map((post, id) => (
                        <div key={id}>
                          <MainLastPost post={post} />
                        </div>
                      ))}
                  </div>
                  <div className={styles.posts_wrapper}>
                    <MainPost posts={posts} />
                  </div>
                </>
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
      </section>
    </>
  );
};
