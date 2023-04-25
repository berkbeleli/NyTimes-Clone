import React from "react";
import styles from "./FooterItems1.module.css";
import { v4 as uuidv4 } from "uuid";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

export const FooterItemsRow1 = ({ sections, current, setCurrent }) => {
  const { isTabletOrMobile } = useMediaQueryHook();
  return (
    <div className={styles.footer_categories_container}>
      {sections.map((cat) => {
        const { section, subSections } = cat;
        return (
          <div
            onClick={() => {
              isTabletOrMobile &&
                setCurrent({ element: section, open: !current.open });
            }}
            className={styles.section_container}
            key={uuidv4()}
          >
            <h3
              className={`${
                isTabletOrMobile &&
                current.element === section &&
                current.open === true
                  ? styles.title_grey
                  : ""
              }`}
            >
              {section}
            </h3>
            <ul
              className={`${
                isTabletOrMobile &&
                current.element === section &&
                current.open === true
                  ? styles.section_visible
                  : styles.section_hidden
              }`}
            >
              {subSections.map((item) => (
                <li key={uuidv4()}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
