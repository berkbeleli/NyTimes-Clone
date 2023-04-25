import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import QueryArticlesUI from "./QueryArticlesUI";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";

export const QueryArticles = () => {
  const { articles, loading, error, setSearchTerm } =
    useContext(QueryArticlesContext);

  const { searchTerm } = useParams();

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <QueryArticlesUI
      searchTerm={searchTerm}
      articles={articles}
      loading={loading}
      error={error}
    />
  );
};
