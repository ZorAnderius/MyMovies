import { useParams } from 'react-router-dom';
import styles from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../API/fetchMovies';
import ReviewCard from '../ReviewCard/ReviewCard';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => { 
      try {
        const data = await fetchMovieById(movieId, "reviews");
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    
    getReviews();
  },[])
  return reviews?.length > 0 && (
    <ul>
      {
        reviews.map(review => <li key={review.id}>
          <ReviewCard review={review} />
        </li>)
    }
    </ul>
  )
}

export default MovieReviews