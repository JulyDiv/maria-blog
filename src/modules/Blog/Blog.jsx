/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Blog.module.sass";
import axios from "axios";
import { Posts } from "../Posts/Posts";
import { Pagination } from "../Pagination/Pagination";

export const Blog = ({
  posts,
  setPosts,
  isLogged,
  setIsLogged,
  isLoading,
  setIsLoading,
}) => {

  const [btnBottom, setBtnBottom] = useState(true);

  const reversePost = posts.slice(0).reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = reversePost.slice(firstPostIndex, lastPostIndex);

  const onPagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const totalPosts = posts.length;
  const postCount = Math.ceil(totalPosts / postPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= postCount; i++) {
    pageNumbers.push(i);
  }

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/posts`)
      .then(({ data }) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // if (isLoading) {
  //   return <h1 style={{ display: "flex", justifyContent: "center" }}>Загрузка постов...</h1>;
  // }

  return (
    <>
      <section className={styles.blog}>
        {isLoading ? (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Загрузка постов...
          </h1>
        ) : (
          <>
            <div className={`${styles.block} ${styles.block_top}`}>
              {currentPage > 1 && (
                <button className={styles.button} onClick={() => prevPage()}>
                  Предыдущие
                </button>
              )}
              <Pagination
                postPerPage={postPerPage}
                totalPosts={totalPosts}
                onPagination={onPagination}
                pageNumbers={pageNumbers}
              />
              {postCount > currentPage && (
                <button className={styles.button} onClick={() => nextPage()}>
                  Далее
                </button>
              )}
            </div>
            {currentPost.map((post, id) => (
              <Posts
                key={id}
                post={post}
                isLogged={isLogged}
                setPosts={setPosts}
                posts={posts}
                getData={getData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            ))}
            <div className={`${styles.block} ${styles.block_bottom}`}>
              {currentPage > 1 && (
                <button
                  className={styles.button}
                  onClick={() => prevPage()}
                >
                  Предыдущие
                </button>
              )}
              <Pagination
                postPerPage={postPerPage}
                totalPosts={totalPosts}
                onPagination={onPagination}
                pageNumbers={pageNumbers}
                btnBottom={btnBottom}
              />
              {postCount > currentPage && (
                <button
                  className={styles.button}
                  onClick={() => nextPage()}
                >
                  Далее
                </button>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};
