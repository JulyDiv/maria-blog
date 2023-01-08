/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./Main.module.sass";
import Link from "next/link";
import axios from "axios";
import { PostItem } from "../PostItem/PostItem";
import { ModalPost } from "../ModalPost/ModalPost";
import { Posts } from "../Posts/Posts";
import { Contacts } from "../Contacts/Contacts";
import { MainPost } from "../MainPost/MainPost";
import { MainLastPost } from "../MainLastPost/MainLastPost";

export const Main = ({ isLogged, posts, setPosts }) => {
  //const [posts, setPosts] = useState([]);
  //const [showMoreBtn, setShowMoreBtn] = useState(false);

  const getData = async () => {
    return await axios
      .get("https://broad-accidental-servant.glitch.me/posts", {})
      .then(({ data }) => {
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
              <div className={styles.posts_wrapper}>
                {posts.slice(-2).reverse().map((post, id) => (
                  <MainLastPost key={id} post={post} />
                ))}
              </div>

              <div className={styles.posts_wrapper}>
                <MainPost posts={posts} />
              </div>
            </div>
            <Contacts />
          </div>
        </div>
      </section>
    </>
  );
};
