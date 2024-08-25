import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import StarRatings from "react-star-ratings";
import { convertMovieDetails } from "../../helpers/convertMovieDetails";

const MovieCard = ({ movie, location }) => {
  const { id, poster_path, title, vote_average } = convertMovieDetails(movie);
  return (
    <Link
      to={`/movies/${id}`}
      state={location}
      className={styles.cardContainer}
    >
      <div className={styles.imgWrapper}>
        <img className={styles.moviePoster} src={poster_path} alt={title} />
        {!movie.poster_path && (
          <div className={styles.noPosterTitle}>
            <p>{title}</p>
          </div>
        )}
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.titleCard}>{title}</p>
        <div className={styles.rating}>
          <p>{vote_average} / 10</p>
          <StarRatings
            rating={Number(vote_average)}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="0"
            numberOfStars={10}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
