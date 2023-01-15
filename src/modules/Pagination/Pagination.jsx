import Link from "next/link";
import React from "react";
import styles from "./Pagination.module.sass";

export const Pagination = ({
  btnBottom,
  onPagination,
  pageNumbers,
  currentPage,
  leftPortionPageNumber,
  rightPortionPageNumber,
  portionNumber,
}) => {

  return (
    <>
      <div className={styles.pagination}>
        <ul className={styles.list}>
          {pageNumbers
            .filter(
              (number) =>
                number >= leftPortionPageNumber &&
                number <= rightPortionPageNumber
            )
            .map((number) => (
              <li key={number} className={styles.item}>
                <button
                  className={
                    currentPage === number
                      ? `${styles.button} ${styles.button_active}`
                      : `${styles.button}`
                  }
                  onClick={(e) => onPagination(number)}
                >
                  {number}
                </button>
              </li>
            ))}
        </ul>
      </div>
      {/* <div className={styles.pagination}>
        <ul className={styles.list}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.item}>
              <button
                className={currentPage === number ? `${styles.button} ${styles.button_active}` : `${styles.button}`}
                onClick={() => onPagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};
