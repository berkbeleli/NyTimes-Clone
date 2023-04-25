import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SortingSelect.module.css";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";

export const SortingSelect = () => {
  const { sortingOption, setSortingOption, setPage } =
    useContext(QueryArticlesContext);

  const handleChange = (e) => {
    setSortingOption(e.target.value);
    setPage(1);
  };

  // select sorting options array
  let options = [
    {
      value: "relevance",
      label: "Sort by Relevance",
    },
    {
      value: "newest",
      label: "Sort by Newest",
    },
    {
      value: "oldest",
      label: "Sort by Oldest",
    },
  ];
  return (
    <div className={styles.sorting_select}>
      <select value={sortingOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={uuidv4()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
