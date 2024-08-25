import React from "react";
import styles from "./TrendingHeadline.module.css";
import trendMovieGif from "../../gif/trend_gif.gif";

const TrendingHeadline = React.memo(() => {
  return (
    <div className={styles.thumb}>
      <img src={trendMovieGif} alt="Trending movies" width={300} height={70} />
    </div>
  );
});

export default TrendingHeadline;
