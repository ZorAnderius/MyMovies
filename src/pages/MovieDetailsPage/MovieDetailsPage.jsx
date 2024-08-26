import clsx from 'clsx';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import {Suspense} from 'react';

import { fetchMovieById } from '../../API/fetchMovies';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import Loader from '../../components/Loader/Loader';
import LoaderDetails from '../../components/LoaderDetails/LoaderDetails';

import styles from './MovieDetailsPage.module.css';

const buildClass = ({ isActive }) =>
  clsx(styles.btn, isActive && styles.btnActive);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation();
  const locRef = useRef(location.state);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoad(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        navigate('/error', { replace: true });
      } finally {
        setIsLoad(false);
      }
    };

    getMovieById();
  }, [movieId]);

  const routeBack = useMemo(() =>
    locRef.current?.pathname === '/' ? 'Home' : 'Movie'
  );

  return (
    <div>
      <GoBackBtn location={locRef.current ?? '/movies'}>{routeBack}</GoBackBtn>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          {movie && <MovieDetailsCard movie={movie} />}
          <div className={styles.btnsContainer}>
            <NavLink to="casts" className={buildClass}>
              Casts
            </NavLink>
            <NavLink to="reviews" className={buildClass}>
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<LoaderDetails />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
