import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { fetchMovieById } from "../../API/fetchMovies";
import ReviewCard from "../ReviewCard/ReviewCard";
import NoDataFound from "../NoDataFound/NoDataFound";
import LoaderDetails from "../LoaderDetails/LoaderDetails";

import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locRef = useRef(location.state);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoad(true);
        const data = await fetchMovieById(movieId, "reviews");
        setReviews(data.results);
      } catch (error) {
        navigate("/error", { replace: true, state: { from: locRef.current } });
      } finally {
        setIsLoad(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoad ? (
        <LoaderDetails />
      ) : reviews?.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound>No cast information found</NoDataFound>
      )}
    </>
  );
};

export default MovieReviews;
