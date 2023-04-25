import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch.js";

export const QueryArticlesContext = createContext();

export const QueryArticlesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortingOption, setSortingOption] = useState("relevance");
  const [page, setPage] = useState(1);

  const apiKey = process.env.REACT_APP_NYTIMES_API_KEY;

  // search articles based on user search-term request
  let {
    data: articles,
    totalArticles,
    loading,
    error,
  } = useFetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&sort=${sortingOption}&page=${page}&api-key=${apiKey}`,
    true
  );

  return (
    <QueryArticlesContext.Provider
      value={{
        articles,
        loading,
        error,
        sortingOption,
        setSortingOption,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        totalArticles,
      }}
    >
      {children}
    </QueryArticlesContext.Provider>
  );
};
