import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = React.memo(({ movies, location }) => {
  return (
    movies?.length > 0 && (
      <ul className={styles.moviesContainer}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <MovieCard movie={movie} location={location} />
          </li>
        ))}
      </ul>
    )
  );
});

export default MovieList;
