import Link from "next/link";
import React from "react";
import styles from "./Pagination.module.sass";

export const Pagination = ({ btnBottom, onPagination, pageNumbers }) => {
  //const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  return (
    <>
      <div className={styles.pagination}>
        <ul className={styles.list}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.item}>
              <button
                className={`${styles.button}`}
                onClick={() => onPagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};