/* eslint-disable @next/next/no-img-element */
import React from "react";

export const PostItem = ({ posts }) => {
    return (
      <>
        <div className="posts-choice__item">
          <img className="posts-choice__img" src={posts.img} alt="photo: post" />
          <div className="posts-choice__block">
            <h4 className="posts-choice__title">{posts.title}</h4>
            <span className="posts-choice__span">{posts.date}</span>
          </div>
        </div>
      </>
    );
}