/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./Main.module.sass";
import Link from "next/link";
import axios from "axios";
import { PostItem } from "../PostItem/PostItem";
import { ModalPost } from "../ModalPost/ModalPost";
import { Posts } from "../Posts/Posts";
import { Contacts } from "../Contacts/Contacts";

export const Main = ({ isLogged }) => {
  //const [posts, setPosts] = useState([]);
  //const [showMoreBtn, setShowMoreBtn] = useState(false);

  // const getData = async () => {
  //   return await axios
  //     .get("https://broad-accidental-servant.glitch.me/posts", {})
  //     .then(({ data }) => {
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <section className={styles.main}>
        <div className={`container`}>
          {/* <div className={styles.top}>
            <Link href="/blog" className={styles.top_span}>
              GSR-блог
            </Link>
            <span className={styles.top_line}></span>
          </div> */}
          <div className={styles.wrapper}>
            {/* <div
              className={styles.posts}
              style={{
                width: "500px",
                height: "700px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                    <div>img</div>
                    <h5>title</h5>
                    <p>date</p>
                    <p>text</p>
                </div>
                <div style={{ display: "flex", width: "100px" }}>
                  <div style={{ width: "50px" }}>
                    <h5>title</h5>
                    <p>date</p>
                  </div>
                  <div style={{ width: "50px" }}>
                    <h5>title</h5>
                    <p>date</p>
                  </div>
                </div>
              </div>

              <div>
                  <div>
                    <div>img</div>
                    <h5>title</h5>
                    <p>date</p>
                    <p>text</p>
                  </div>
                <div style={{ display: "flex", width: "100px" }}>
                  <div style={{ width: "50px" }}>
                    <h5>title</h5>
                    <p>date</p>
                  </div>
                  <div style={{ width: "50px" }}>
                    <h5>title</h5>
                    <p>date</p>
                  </div>
                </div>
              </div>

            </div> */}

            {/* <Posts posts={posts} showMoreBtn={showMoreBtn} setShowMoreBtn={setShowMoreBtn} /> */}
            <Contacts />
          </div>
        </div>
      </section>
      {/* <section className={styles.blog}>
        <div className="container">
          <div className={styles.blog_wrapper}>
            <div className={styles.posts}>
              <div className={styles.posts_top}>
                <Link href="/blog" className={styles.posts_top__span}>
                  GSR-блог
                </Link>
                <span className={styles.posts_top__line}></span>
              </div>

              <div className={styles.posts_wrapper}>
                {posts
                  .slice(0)
                  .reverse()
                  .map(({ id, title, img, text, date }) => (
                    <div key={id} className={styles.posts_main}>
                      <img
                        className={styles.posts_main__img}
                        src={img}
                        alt="photo: post"
                      />
                      <h4 className={styles.posts_main__title}>{title}</h4>
                      <span className={styles.posts_main__span}>{date}</span>
                      <p className={styles.posts_main__text}>
                        {text.lenght <= 700 ? text : text.substr(0, 700)}
                        {!showMoreBtn && (
                          <>
                            <span>...</span>
                            <button onClick={() => setShowMoreBtn(true)}>
                              Читать дальше
                            </button>
                          </>
                        )}
                        {showMoreBtn && text.substr(700)}
                      </p>
                    </div>
                  ))}
                <div className={styles.posts_choice}>
                  {posts.map((posts, id) => (
                    <PostItem key={id} posts={posts} />
                  ))}
                  {posts.slice(0, 4).map((posts, id) => (
                    <PostItem key={id} posts={posts} />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section> */}
      {/* <section className="blog">
        <div className="container">
          <div className="blog-wrapper">
            <div className="posts">
              <div className="posts-top">
                <Link href="/blog" className="posts-top__span">
                  GSR-блог
                </Link>
                <span className="posts-top__line"></span>
              </div>

              <div className="posts-wrapper">
                {posts
                  .slice(0)
                  .reverse()
                  .map(({ id, title, img, text, date }) => (
                    <div key={id} className="posts-main">
                      <img
                        className="posts-main__img"
                        src={img}
                        alt="photo: post"
                      />
                      <h4 className="posts-main__title">{title}</h4>
                      <span className="posts-main__span">{date}</span>
                      <p className="posts-main__text">
                        {text.lenght <= 700 ? text : text.substr(0, 700)}
                        {!showMoreBtn && (
                          <>
                            <span>...</span>
                            <button onClick={() => setShowMoreBtn(true)}>
                              Читать дальше
                            </button>
                          </>
                        )}
                        {showMoreBtn && text.substr(700)}
                      </p>
                    </div>
                  ))} */}
      {/* {posts.slice(0, 1).map(({ id, title, img, text, date }) => (
                  <div key={id} className="posts-main">
                    <img
                      className="posts-main__img"
                      src={img}
                      alt="photo: post"
                    />
                    <h4 className="posts-main__title">{title}</h4>
                    <span className="posts-main__span">{date}</span>
                    <p className="posts-main__text">
                      {text.lenght <= 700 ? text : text.substr(0, 700)}
                      {!showMoreBtn && (
                        <>
                          <span>...</span>
                          <button onClick={() => setShowMoreBtn(true)}>
                            Читать дальше
                          </button>
                        </>
                      )}
                      {showMoreBtn && text.substr(700)}
                    </p>
                  </div>
                ))} */}
      {/* <div className="posts-choice">
                  {posts.map((posts, id) => (
                    <PostItem key={id} posts={posts} />
                  ))}
                  {posts.slice(0, 4).map((posts, id) => (
                    <PostItem key={id} posts={posts} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
