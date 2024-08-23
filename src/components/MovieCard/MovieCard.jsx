import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie, location }) => {
  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      <p>{movie.title}</p>
      <p>{movie.poster_path}</p>
      <p>{movie.vote_average}</p>
    </Link>
  );
};

export default MovieCard