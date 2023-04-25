import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./QueryArticles.module.css";
import {
  Article,
  Error,
  Loader,
  PaginationUI,
  SortingSelect,
} from "../../components";

const QueryArticlesUI = ({ searchTerm, error, loading, articles }) => {
  return (
    <div className={styles.query_articles_page}>
      <header className={styles.query_articles_header}>
        <div className={styles.query_title_container}>
          {error && <Error errorMessage={error} />}
          {articles.response?.docs.length === 0 && (
            <p className={styles.articles_not_found}>
              No articles which contains <span>{searchTerm}</span> search term
            </p>
          )}
          {articles.response?.docs.length > 0 && <h1>{searchTerm}</h1>}
          {articles.response?.docs.length > 0 && <SortingSelect />}
        </div>
      </header>
      {loading && <Loader />}
      {articles.response?.docs.length > 0 && <PaginationUI />}

      <div className={styles.articles_layout}>
        {articles.response?.docs.map((article) => {
          const {
            headline,
            abstract,
            pub_date,
            section_name,
            byline,
            multimedia,
            url,
          } = article;

          const articleObj = {
            title: headline?.main,
            abstract: abstract,
            date: pub_date,
            section: section_name,
            byline: byline?.original,
            img: multimedia,
            url: url,
            baseUrlImg: "http://www.nytimes.com/",
          };

          return (
            <Article
              key={uuidv4()}
              article={articleObj}
              articleType="query-article"
            />
          );
        })}
      </div>

      {articles.response?.docs.length > 0 && <PaginationUI />}
    </div>
  );
};

export default QueryArticlesUI;
