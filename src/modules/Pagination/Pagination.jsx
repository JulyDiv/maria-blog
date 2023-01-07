import Link from "next/link";
import React from "react";
import styles from "./Pagination.module.sass";

export const Pagination = ({ postPerPage, totalPosts, onPagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => onPagination(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};