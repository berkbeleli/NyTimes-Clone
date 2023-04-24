import React, { useState, useEffect, useContext } from "react";
import { NavItems } from "..";
import { SectionsContext } from "../../contexts/SectionsContext";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { navSections } = useContext(SectionsContext);

  const [isScrolling, setIsScrolling] = useState(false);

  // set navbar to position:fixed when scrolling
  const handleScroll = () => {
    if (window.pageYOffset > 140) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!navSections) {
    return null;
  }

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolling ? styles.navbar_scrolled : ""
      }`}
    >
      <NavItems sections={navSections} />
    </nav>
  );
};
