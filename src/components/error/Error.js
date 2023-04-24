import React from "react";
import styles from "./Error.module.css";

export const Error = ({ errorMessage }) => {
  return <p className={styles.error}>{errorMessage}</p>;
};
