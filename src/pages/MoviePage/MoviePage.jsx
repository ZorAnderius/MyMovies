import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { fetchMovieByName } from "../../API/fetchMovies";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import PaginateMovie from "../../components/PaginateMovie/PaginateMovie";

import styles from "./MoviesPage.module.css";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const total = useRef();
  const [queries, setQueries] = useSearchParams();
  const queryTitle = queries.get("query") ?? "";
  const queryPage = queries.get("page") ?? "";
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState(queryTitle);
  const location = useLocation();

  useEffect(() => {
    if (queryPage !== currentPage) {
      setCurrentPage(queryPage);
    }
  }, [queryPage, currentPage]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const data = await fetchMovieByName(query, currentPage);
        setMovies(data.results);
        total.current = data.total_pages > 500 ? 500 : data.total_pages;
      } catch (error) {
        console.log(error);
      }
    };

    if (queryPage && query && queryPage === currentPage) {
      searchMovies();
    } else if (!queryPage && query) {
      queries.set("page", 1);
      setQueries(queries);
    }
  }, [query, currentPage]);

  const handlePage = (page) => {
    queries.set("page", page);
    setQueries(queries);
  };

  const onSearch = (query) => {
    queries.set("query", query);
    setQueries(queries);
    setQuery(query);
  };

  return (
    <>
      <SearchBox onSubmit={onSearch} param={queryTitle} />
      <MovieList movies={movies} location={location} />
      {total.current > 1 && (
        <PaginateMovie
          total={total.current}
          currentPage={currentPage}
          setCurrentPage={handlePage}
        />
      )}
    </>
  );
};

export default MoviePage;
