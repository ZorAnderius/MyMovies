import { useEffect, useState } from 'react';

import { fetchMovieByName } from '../../API/fetchMovies';
import SearchBox from '../../components/SearchBox/SearchBox';

import styles from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([])
  const [queries, setQueries] = useSearchParams();
  const param = queries.get('query') ?? "";
  const [query, setQuery] = useState(param);
  const location = useLocation();

  useEffect(() => {
    const searchMovies = async() => { 
      try {
        const data = await fetchMovieByName(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies(); 
  }, [query]);

  const onSearch = query => { 
    setQueries({ ...queries, query });
    setQuery(query);
   }

  return (
    <>
      <SearchBox onSubmit={onSearch} param={param} />
      <MovieList movies={movies} location={location} />
    </>
  );
}

export default MoviePage