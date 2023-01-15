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

  const reversePost = posts.slice(0).reverse();
  const portionSize = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = reversePost.slice(firstPostIndex, lastPostIndex);


  const nextPage = () => {
    //setCurrentPage((prev) => prev + 1);
    setPortionNumber(portionNumber + 1);
  };
  const prevPage = () => {
    //setCurrentPage((prev) => prev - 1);
    setPortionNumber(portionNumber - 1);
  };

  const totalPosts = posts.length;
  const postCount = Math.ceil(totalPosts / postPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= postCount; i++) {
    pageNumbers.push(i);
  }

  const portionCount = Math.ceil(postCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

    const onPagination = (pageNumber) => {
      setCurrentPage(pageNumber);
      console.log(pageNumber);
    };

  //console.log(pageNumber);

  // useEffect(
  //   () => setPortionNumber(Math.ceil(currentPage / portionSize)),
  //   [currentPage]
  // );

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
              <Pagination
                postPerPage={postPerPage}
                totalPosts={totalPosts}
                onPagination={onPagination}
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                leftPortionPageNumber={leftPortionPageNumber}
                rightPortionPageNumber={rightPortionPageNumber}
                portionNumber={portionNumber}
                prevPage={prevPage}
                nextPage={nextPage}
                portionCount={portionCount}
              />
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
              <Pagination
                postPerPage={postPerPage}
                totalPosts={totalPosts}
                onPagination={onPagination}
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                leftPortionPageNumber={leftPortionPageNumber}
                rightPortionPageNumber={rightPortionPageNumber}
                portionNumber={portionNumber}
                prevPage={prevPage}
                nextPage={nextPage}
                portionCount={portionCount}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};
