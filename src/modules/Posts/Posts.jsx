/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Posts.module.sass";
import axios from "axios";
import { ModalPost } from "../ModalPost/ModalPost";

export const Posts = ({ post, isLogged, setPosts, posts, getData, isLoading, setIsLoading }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [isModalPostEdit, setIsModalPostEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [date, setDate] = useState(post.date);
  const [text, setText] = useState(post.text);

    // if (isLoading) {
    //   return <h1>Loading Posts...</h1>;
    // }

  const onDelete = (data) => {
    console.log(data);
    axios
      .delete(`https://broad-accidental-servant.glitch.me/posts/${post.id}`)
      .then(({ data }) => {
        console.log(data);
        getData();
      })
      .catch(function (error) {
        console.log(error.message);
      });

  };

  const onEdit = () => {
    setIsModalPostEdit(true);
  };

  const onSubmitEdit = () => {};

  //console.log(post);

  return (
    <>
      <div className={styles.posts}>
        <div className={`container`}>
          <div className={styles.wrapper}>
            <div key={post.id} className={styles.main}>
              <img
                className={styles.main_img}
                src={post.img}
                alt="photo: post"
              />
              <div className={styles.block}>
                {!isLogged && (
                  <>
                    <button className={""} onClick={() => onDelete()}>
                      Удалить пост
                    </button>
                    <button className={""} onClick={() => onEdit()}>
                      Редактировать пост
                    </button>
                  </>
                )}
                {isModalPostEdit && (
                  <ModalPost
                    isModalPostEdit={isModalPostEdit}
                    setIsModalPostEdit={setIsModalPostEdit}
                    title={title}
                    date={date}
                    text={text}
                    setPosts={setPosts}
                    posts={posts}
                    post={post}
                    getData={getData}
                  />
                )}
                <h4 className={styles.title}>{post.title}</h4>
                <span className={styles.span}>{post.date}</span>
                {post.text ? (
                  <p className={styles.text}>
                    {post.text.length <= 700 ? (
                      post.text
                    ) : (
                      <>
                        {post.text.substr(0, 700)}
                        {!showMoreBtn && (
                          <>
                            <span>...</span>
                            <button
                              className={styles.button}
                              onClick={() => setShowMoreBtn(true)}
                            >
                              Читать дальше
                            </button>
                          </>
                        )}
                        {showMoreBtn && post.text.substr(700)}
                      </>
                    )}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
