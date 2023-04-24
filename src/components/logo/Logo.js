import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";
import nyLogo from "../../assets/images/ny-times-logo.png";
import styles from "./Logo.module.css";

export const Logo = ({ inHeader }) => {
  const { setPage } = useContext(QueryArticlesContext);
  return (
    <Link
      onClick={() => setPage(1)}
      to="/"
      className={`${inHeader ? styles.header_logo : styles.footer_logo}`}
    >
      <img src={nyLogo} alt="ny-times-logo" />
    </Link>
  );
};
