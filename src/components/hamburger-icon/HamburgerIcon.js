import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { BsList } from "react-icons/bs";
import styles from "./HamburgerIcon.module.css";

export const HamburgerIcon = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  //open sidebar on hamburger icon click
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className={styles.hamburger_icon_container}>
      <BsList
        onClick={openSidebar}
        className={`${styles.hamburger_icon} ${
          isSidebarOpen ? styles.hamburger_icon_hidden : ""
        }`}
      />
    </div>
  );
};
