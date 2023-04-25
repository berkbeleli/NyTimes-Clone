import React from "react";
import { TiUser } from "react-icons/ti";
import styles from "./UserIcon.module.css";

export const UserIcon = () => {
  return (
    <div className={styles.user_icon_container}>
      <TiUser className={styles.user_icon} />{" "}
    </div>
  );
};
