import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SectionArticles.module.css";
import { SectionTitle, Error, Loader, Article } from "../../components";
import { removeDashesAndCapitalize } from "../../utilities/dataManipulation";

const SectionArticlesUI = ({ section, articles, loading, error }) => {
  let sectionName = section === "realestate" ? "real-estate" : section;
  return (
    <div className={styles.section_articles}>
      <SectionTitle title={removeDashesAndCapitalize(sectionName)} />
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
              <Article
                key={uuidv4()}
                article={articleObj}
                articleType="section"
              />
            );
          })}
      </div>
    </div>
  );
};

export default SectionArticlesUI;
