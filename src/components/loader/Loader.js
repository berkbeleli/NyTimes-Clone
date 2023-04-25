import React from "react";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.spinners_container}>
      <div className={styles.spinner}></div>
      <div className={styles.spinner}></div>
      <div className={styles.spinner}></div>
      <div className={styles.spinner}></div>
    </div>
  );
};
