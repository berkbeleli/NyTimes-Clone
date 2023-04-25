import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./CloseIcon.module.css";

export const CloseIcon = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  // close sidebar on close icon click
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isSidebarOpen === false) {
    return null;
  }

  return (
    <div className={styles.close_icon_container}>
      <IoCloseOutline onClick={closeSidebar} className={styles.close_icon} />
    </div>
  );
};
