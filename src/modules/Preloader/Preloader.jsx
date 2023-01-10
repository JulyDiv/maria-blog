import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.sass";

export const Preloader = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 13000);
  }, []);

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
