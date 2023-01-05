/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { PostItem } from "../../components/PostItem";
import { ModalPost } from "../ModalPost/ModalPost";

export const Blog = ({ isLogged }) => {
  const [posts, setPosts] = useState([]);
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");
  // const [date, setDate] = useState("");
  // const [imgs, setImgs] = useState("");
  const [showMoreBtn, setShowMoreBtn] = useState(false);

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
      <section className="blog">
        <div className="container">
          <div className="blog-wrapper">
            <div className="posts">
              <div className="posts-top">
                <Link href="/blog" className="posts-top__span">Мой Блог</Link>
                <span className="posts-top__line"></span>
              </div>

              <div className="posts-wrapper">
                {posts.slice(0, 1).map(({ id, title, img, text, date }) => (
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
                ))}
                <div className="posts-choice">
                  {posts.slice(0, 4).map((posts, id) => (
                    <PostItem key={id} posts={posts} />
                  ))}
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="contacts-icon">
                <Link
                  href="https://t.me/mariagonzaaa"
                  className="contacts-icon__item contacts-icon__telegram"
                ></Link>
                <Link
                  href="https://instagram.com/gonzabutterfly?igshid=YmMyMTA2M2Y="
                  className="contacts-icon__item contacts-icon__instagram"
                ></Link>
                <Link
                  href="https://www.youtube.com/@mariagonzaa"
                  className="contacts-icon__item contacts-icon__youtube"
                ></Link>
                <Link
                  href="/"
                  className="contacts-icon__item contacts-icon__vk"
                ></Link>
              </div>
              <div className="contacts-target"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
