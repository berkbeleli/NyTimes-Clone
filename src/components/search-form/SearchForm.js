import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";
import { SidebarContext } from "../../contexts/SidebarContext";
import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const { setPage } = useContext(QueryArticlesContext);
  const { setIsSidebarOpen } = useContext(SidebarContext);

  let navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  // search articles handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //if input is empty return
    if (!searchTerm) return;

    // lower casing and trimming input search term
    let formattedSearchTerm = searchTerm.toString().toLowerCase().trim();

    //clean search bar value
    setSearchTerm("");

    /* For each submit return to the first page. 
    Important if, in a previous search, we were on a different page from the first*/
    setPage(1);

    // for mobile screen: close sidebar when submit
    setIsSidebarOpen(false);

    //pass search term parameters to the url of query articles page and navigate to it
    navigate(`/query/${formattedSearchTerm}`);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  const input = useRef(null);

  useEffect(() => {
    // input always focused after component mounting
    input.current.focus();
  }, []);

  return (
    <form className={styles.search_form}>
      <input
        ref={input}
        className={styles.search_input}
        type="search"
        placeholder="SEARCH"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className={styles.submit_btn}
        type="submit"
      >
        GO
      </button>
    </form>
  );
};
