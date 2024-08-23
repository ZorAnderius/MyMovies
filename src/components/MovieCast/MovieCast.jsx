import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../API/fetchMovies';
import CastCard from '../CastCard/CastCard';


import styles from './MovieCast.module.css';

const MovieCast = () => {
    const [casts, setCasts] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        const getCastInfo = async () => { 
            try {
                const data = await fetchMovieById(movieId, 'credits');
                setCasts(data.cast);
            } catch (error) {
                console.log(error);
            }
        }
        
        getCastInfo();
    }, [])
    
  return casts?.length > 0 && (
      <ul>
       {
              casts.map(cast => <li key={cast.id}>
                <CastCard cast={cast} />
              </li>)
       }
      </ul>
  )
}

export default MovieCast