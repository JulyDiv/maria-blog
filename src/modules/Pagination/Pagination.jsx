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
  portionCount,
  nextPage,
  prevPage
}) => {

  return (
    <>
      {portionNumber > 1 && (
        <button className={styles.button_change} onClick={() => prevPage()}>
          Предыдущие
        </button>
      )}
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
      {portionCount > portionNumber && (
        <button className={styles.button_change} onClick={() => nextPage()}>
          Далее
        </button>
      )}
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
