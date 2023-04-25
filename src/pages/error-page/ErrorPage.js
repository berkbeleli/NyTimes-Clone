import React from "react";
import styles from "./ErrorPage.module.css";
import { WarningIcon } from "../../components";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className={styles.error_page}>
      <div className={styles.error_message_container}>
        <WarningIcon />
        <p>Ooops! You're trying to access a non-existent path</p>
        <Link to="/" className={styles.back_btn}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};
