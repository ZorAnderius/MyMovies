import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

import { fetchMovieById } from "../../API/fetchMovies";

import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locRef = useRef(location.state);
  console.log(locRef);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [movieId]);

  const routeBack = useMemo(()=>locRef.current.pathname === '/'
    ? 'Home'
    : 'Movie')
  return (
    <div>
      <GoBackBtn location={locRef.current}>{routeBack}</GoBackBtn>
      {movie && (
        <div>
          <p>{movie.title}</p>
          <p>{movie.release_date}</p>
          <p>{movie.poster_path}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <p>{movie.vote_count}</p>
          <p>{movie.popularity}</p>
          <ul>
            {movie &&
              movie.genres?.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      )}
      <Link to="casts">Casts</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
