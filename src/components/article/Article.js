import React from "react";
import { IoPersonCircleOutline as AuthorIcon } from "react-icons/io5";
import ReactTimeAgo from "react-time-ago";
import { useSpring, animated } from "react-spring";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Article.module.css";
import { removeFirstWord } from "../../utilities/dataManipulation";
import imgPlaceholder from "../../assets/images/nytimes-placeholder.jpg";

export const Article = ({ article, articleType }) => {
  const fadeIn = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const { title, abstract, date, section, byline, img, url, baseUrlImg } =
    article;

  // if article has not title or abstract don't display it
  if (!title || !abstract) {
    return null;
  }
  return (
    <AnimationOnScroll offset={500} duration={0.5} animateIn="animate__fadeIn">
      <animated.a style={fadeIn} href={url} target="_blank">
        <article
          className={` ${
            articleType === "main"
              ? styles.main_article
              : styles.filtered_article
          }`}
        >
          <section className={styles.article_info}>
            <ReactTimeAgo
              className={styles.date}
              date={Date.parse(date)}
              locale="en-US"
            />
            <div className={styles.text_block}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.section_name}>{section?.toUpperCase()}</p>
              <p className={styles.abstract}>{article.abstract}</p>
              {byline && (
                <div className={styles.author}>
                  <AuthorIcon className={styles.author_icon} />
                  <p>{removeFirstWord(byline)}</p>
                </div>
              )}
            </div>
          </section>

          <animated.div
            className={styles.article_img}
            style={{
              fadeIn,
              backgroundImage: `url(${
                img?.length > 0 ? baseUrlImg + img[0].url : imgPlaceholder
              })`,
            }}
          />
        </article>
      </animated.a>
    </AnimationOnScroll>
  );
};
