import React from "react";
import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ title }) => {
  return <h1 className={styles.section_title}>{title}</h1>;
};
