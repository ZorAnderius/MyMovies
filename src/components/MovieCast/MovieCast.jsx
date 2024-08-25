import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../API/fetchMovies";
import CastCard from "../CastCard/CastCard";

import styles from "./MovieCast.module.css";
import LoaderDetails from "../LoaderDetails/LoaderDetails";
import NoDataFound from "../NoDataFound/NoDataFound";

const MovieCast = () => {
  const [casts, setCasts] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        setIsLoad(true);
        const data = await fetchMovieById(movieId, "credits");
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    };

    getCastInfo();
  }, []);

  return (
    <>
      {isLoad ? (
        <LoaderDetails />
      ) : casts?.length > 0 ? (
        <ul className={styles.castsList}>
          {casts.map((cast) => (
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
