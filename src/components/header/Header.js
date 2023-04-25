import React, { useContext, useRef, useEffect } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";
import {
  SearchBox,
  DateToday,
  Logo,
  HamburgerIcon,
  CloseIcon,
  UserIcon,
  Navbar,
} from "..";

import styles from "./Header.module.css";

export const Header = () => {
  const { isSidebarOpen, setHeaderHeight } = useContext(SidebarContext);
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueryHook();

  const header = useRef(null);

  useEffect(() => {
    // dynamically retrieve header_1 height to set sidebar absolute position below it
    if (header !== null) {
      let height = header.current.clientHeight;
      setHeaderHeight(height);
    }
  }, [header]);

  return (
    <header className={styles.header}>
      <section ref={header} className={styles.header_1}>
        {isDesktopOrLaptop && <SearchBox />}
        {isTabletOrMobile && <HamburgerIcon />}
        <Logo inHeader={true} />
        {isTabletOrMobile && isSidebarOpen === false && <UserIcon />}
        {isTabletOrMobile && isSidebarOpen && <CloseIcon />}
        {isDesktopOrLaptop && <DateToday />}
      </section>

      <section
        className={`${
          isSidebarOpen === false || isDesktopOrLaptop ? styles.header_2 : ""
        }`}
      >
        {isDesktopOrLaptop && <Navbar />}
        {isTabletOrMobile && isSidebarOpen === false && <DateToday />}
      </section>
    </header>
  );
};
