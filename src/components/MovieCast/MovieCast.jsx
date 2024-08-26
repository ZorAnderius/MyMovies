import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { fetchMovieById } from '../../API/fetchMovies';
import CastCard from '../CastCard/CastCard';
import LoaderDetails from '../LoaderDetails/LoaderDetails';
import NoDataFound from '../NoDataFound/NoDataFound';

import styles from './MovieCast.module.css';

const MovieCast = () => {
  const [casts, setCasts] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locRef = useRef(location.state);

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        setIsLoad(true);
        const data = await fetchMovieById(movieId, 'credits');
        setCasts(data.cast);
      } catch (error) {
        navigate('/error', { replace: true, state: { from: locRef.current } });
      } finally {
        setIsLoad(false);
      }
    };

    getCastInfo();
  }, [movieId]);

  return (
    <>
      {isLoad ? (
        <LoaderDetails />
      ) : casts?.length > 0 ? (
        <ul className={styles.castsList}>
          {casts.map(cast => (
            <li key={cast.id} className={styles.castItem}>
              <CastCard cast={cast} />
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound>No cast information found</NoDataFound>
      )}
    </>
  );
};

export default MovieCast;
