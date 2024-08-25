import { convertMovieDetails } from "../../helpers/convertMovieDetails";
import styles from "./MovieDetailsCard.module.css";

const MovieDetailsCard = ({ movie }) => {
  const {
    title,
    year,
    release_date,
    overview,
    vote_average,
    budget,
    revenue,
    backdrop_path,
    runtime,
    genres,
    poster_path,
  } = convertMovieDetails(movie);

  return (
    <div
      className={styles.movieInfoContainer}
      style={{ "--background-poster": `url(${backdrop_path})` }}
    >
      <div className={styles.movieInfoImgThumb}>
        <img src={poster_path} alt={title} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsTitleContainer}>
          <div className={styles.titleMovie}>
            <p className={styles.detailsTitle}>
              {title} <span>({year})</span>
            </p>
          </div>
          <div className={styles.moreInfo}>
            <p className={styles.titleInfo}>{release_date}</p>
            {runtime && (
              <>
                <div className={styles.cubeSign}></div>
                <p className={styles.titleInfo}>{runtime}</p>
              </>
            )}
            {genres?.length > 0 && (
              <>
                <div className={styles.cubeSign}></div>
                <ul className={styles.genreList}>
                  {genres?.map(({ id, name }) => (
                    <li key={id} className={styles.formItem}>
                      {name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className={styles.detailsValue}>
          <div className={styles.detailsTxt}>
            <p>Rating: </p>
            <p>{vote_average} / 10</p>
          </div>
          <div className={styles.detailsTxt}>
            <p>Budget: </p>
            <p>{budget}</p>
          </div>
          <div className={styles.detailsTxt}>
            <p>Revenue: </p>
            <p>{revenue}</p>
          </div>
        </div>
        <p className={styles.detailOverview}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
