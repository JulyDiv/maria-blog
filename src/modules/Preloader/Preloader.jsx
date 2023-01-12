import React, { useEffect } from "react";
import styles from "./Preloader.module.sass";

export const Preloader = ({ isLoader, setIsLoader }) => {

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 8000);
  }, [setIsLoader]);

  return (
    <>
      {isLoader ? (
        <div className={styles.preloader}>
        <p className={styles.title}>Maria Gonza</p>
      </div>
      ) : (
        ""
      )}
    </>
  );
};
