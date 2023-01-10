import React, { useEffect } from "react";
import styles from "./Preloader.module.sass";

export const Preloader = ({ isLoader, setIsLoader }) => {

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 5000);
  }, [setIsLoader]);

  return (
    <>
      {isLoader ? (
        <div className={styles.preloader}>
          <p className={`${styles.line} ${styles.typewriter}`}>Maria Gonza</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
