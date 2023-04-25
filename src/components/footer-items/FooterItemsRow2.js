import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./FooterItems2.module.css";

export const FooterItemsRow2 = ({ sections }) => {
  return (
    <ul className={styles.footer_last_row_items}>
      {sections.map((section) => (
        <li key={uuidv4()}>{section}</li>
      ))}
    </ul>
  );
};
