import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeUI from "./HomeUI";
import useFetch from "../../hooks/useFetch";

export const Home = () => {
  const apiKey = process.env.REACT_APP_NYTIMES_API_KEY;

  // request to display articles currently on nytimes homepage
  let {
    data: articles,
    loading,
    error,
  } = useFetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
  );

  articles = articles.results;

  return <HomeUI error={error} loading={loading} articles={articles} />;
};
