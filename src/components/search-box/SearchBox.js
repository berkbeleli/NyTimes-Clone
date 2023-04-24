import React, { useState } from "react";
import { SearchForm } from "..";
import styles from "./SearchBox.module.css";
import { BsSearch } from "react-icons/bs";

export const SearchBox = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  // toggle search input visibility on search icon click
  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  return (
    <div className={styles.search_box}>
      <div
        className={`${styles.search_icon} ${
          searchBarVisible
            ? styles.search_icon_enabled
            : styles.search_icon_disabled
        }`}
        onClick={toggleSearchBar}
      >
        <BsSearch />
      </div>

      {searchBarVisible && <SearchForm />}
    </div>
  );
};
