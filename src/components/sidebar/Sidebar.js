import React, { useContext } from "react";

import useMediaQueryHook from "../../hooks/useMediaQueryHook";
import { SidebarContext } from "../../contexts/SidebarContext";
import { SectionsContext } from "../../contexts/SectionsContext";
import { NavItems, SearchForm } from "../index";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const { isSidebarOpen, headerHeight } = useContext(SidebarContext);
  const { navSections } = useContext(SectionsContext);

  const { isDesktopOrLaptop } = useMediaQueryHook();

  if (isSidebarOpen === false || isDesktopOrLaptop) {
    return null;
  }
  return (
    <nav style={{ top: headerHeight }} className={styles.sidebar}>
      <SearchForm />

      {navSections && <NavItems sections={navSections} />}
    </nav>
  );
};
