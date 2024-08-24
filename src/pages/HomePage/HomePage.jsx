import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { fetchTrendMovie } from "../../API/fetchMovies";
import TrendingHeadline from "../../components/TrendingHeadline/TrendingHeadline";
import MovieList from "../../components/MovieList/MovieList";
import PaginateMovie from "../../components/PaginateMovie/PaginateMovie";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const total = useRef();
  const location = useLocation();
  const [param, setParam] = useSearchParams();
  const queryPage = param.get("page") ?? "1";
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (queryPage !== currentPage) {
      setCurrentPage(queryPage);
    }
  }, [queryPage, currentPage]);

  useEffect(() => {
    const getTrendMovie = async () => {
      try {
        const data = await fetchTrendMovie(currentPage);
        setMovies(data.results);
        total.current = data.total_pages > 500 ? 500 : data.total_pages;
      } catch (error) {
        console.error(error);
      }
    };
    queryPage === currentPage && getTrendMovie();
  }, [currentPage]);


  const handlePage = page => {
    setParam({ page });
  };

  return (
    <>
      <TrendingHeadline />
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

export default HomePage;
