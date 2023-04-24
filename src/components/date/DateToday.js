import React from "react";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";
import dateFormat from "dateformat";
import styles from "./Date.module.css";

export const DateToday = () => {
  const { isDesktopOrLaptop } = useMediaQueryHook();

  const today = new Date();

  // return article published date with the format "...time ago"
  return (
    <div className={styles.date}>
      <p className={styles.date_text}>
        {dateFormat(today, "dddd, mmmm dS, yyyy")}
      </p>
      {isDesktopOrLaptop && <p>Today's Paper</p>}
    </div>
  );
};
