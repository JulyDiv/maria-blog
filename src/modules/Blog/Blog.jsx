/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./Blog.module.sass";
import axios from "axios";
import { Posts } from "../Posts/Posts";

export const Blog = ({ posts, setPosts }) => {

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
      {posts
        .slice(0)
        .reverse()
        .map((post, id) => (
          <Posts key={id} post={post} />
        ))}
    </>
  );
};
