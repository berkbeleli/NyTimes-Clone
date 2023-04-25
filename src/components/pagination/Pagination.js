import React, { useContext } from "react";
import Pagination from "react-js-pagination";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";
import styles from "./Pagination.module.css";

export const PaginationUI = () => {
  const { page, setPage, totalArticles } = useContext(QueryArticlesContext);

  const { isDesktopOrLaptop } = useMediaQueryHook();

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.pagination_container}>
      <Pagination
        innerClass={styles.pagination}
        activeClass={styles.active}
        disabledClass={styles.disabled}
        activePage={page}
        itemsCountPerPage={10}
        //totalItemsCount : we can only retrieve a maximum of 200 articles from nytimes API
        totalItemsCount={totalArticles >= 200 ? 200 : totalArticles}
        pageRangeDisplayed={isDesktopOrLaptop ? 10 : 5}
        onChange={handlePageChange}
      />
    </div>
  );
};
