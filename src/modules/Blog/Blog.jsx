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

  // if(isLoading) {
  //   return <h1>Loading...</h1>
  // }

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get("https://broad-accidental-servant.glitch.me/posts", {})
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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(reversePost);

  return (
    <>
      {currentPost
        // .slice(0)
        // .reverse()
        .map((post, id) => (
          <Posts key={id} post={post} isLogged={isLogged} />
        ))}
      {/* {posts
        .slice(0)
        .reverse()
        .map((post, id) => (
          <Posts key={id} post={post} isLogged={isLogged} />
        ))} */}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        onPagination={onPagination}
      />
      <button onClick={() => prevPage()}>Prev</button>
      <button onClick={() => nextPage()}>Next</button>
    </>
  );
};
