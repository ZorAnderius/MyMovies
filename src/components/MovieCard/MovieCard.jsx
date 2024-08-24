import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { imgAPIPath } from '../../API/imgPath';
import emptyTemplate from '../../assets/no_poster_available.jpg';
import StarRatings from 'react-star-ratings';

const MovieCard = ({ movie, location }) => {
  const { id, poster_path, title, vote_average } = movie;
  const imageURL = poster_path ? imgAPIPath + movie.poster_path : emptyTemplate;
  return (
    <Link
      to={`/movies/${id}`}
      state={location}
      className={styles.cardContainer}
    >
      <div className={styles.imgWrapper}>
        <img className={styles.moviePoster} src={imageURL} alt={title} />
        {!poster_path && (
          <div className={styles.noPosterTitle}>
            <p>{title}</p>
          </div>
        )}
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.titleCard}>{title}</p>
        <div className={styles.rating}>
          <p>{vote_average?.toFixed(1) || "0"} / 10</p>
          <StarRatings
            rating={vote_average}
            starRatedColor="orange"
            starDimension="25px"
            starSpacing="0"
            numberOfStars={10}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard