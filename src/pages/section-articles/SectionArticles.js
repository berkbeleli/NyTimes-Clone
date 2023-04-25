import React from "react";
import { useParams } from "react-router-dom";
import SectionArticlesUI from "./SectionArticlesUI";
import useFetch from "../../hooks/useFetch";

export const SectionArticles = () => {
  const { section } = useParams();

  const apiKey = process.env.REACT_APP_NYTIMES_API_KEY;

  // request to displays articles currently on a specific section of nytimes website
  let {
    data: articles,
    loading,
    error,
  } = useFetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  );

  articles = articles.results;

  return (
    <SectionArticlesUI
      section={section}
      articles={articles}
      error={error}
      loading={loading}
    />
  );
};
