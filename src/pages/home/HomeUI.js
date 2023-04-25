import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import { Article } from "../../components/article/Article";
import { Error, Loader, SectionTitle } from "../../components";
import { removeDashesAndCapitalize } from "../../utilities/dataManipulation";

const HomeUI = ({ articles, loading, error }) => {
  return (
    <div className={styles.home}>
      <SectionTitle title={removeDashesAndCapitalize("home-page")} />
      {error && <Error errorMessage={error} />}
      {loading && <Loader />}

      <div className={styles.articles_layout}>
        {articles &&
          articles.map((article) => {
            const {
              title,
              abstract,
              published_date,
              section,
              byline,
              multimedia,
              url,
            } = article;

            const articleObj = {
              title: title,
              abstract: abstract,
              date: published_date,
              section: section,
              byline: byline,
              img: multimedia,
              url: url,
              baseUrlImg: "",
            };

            return (
              <Article key={uuidv4()} article={articleObj} articleType="main" />
            );
          })}
      </div>
    </div>
  );
};

export default HomeUI;
