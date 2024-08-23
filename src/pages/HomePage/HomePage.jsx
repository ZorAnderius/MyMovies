import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { fetchTrendMovie } from "../../API/fetchMovies";
import TrendingHeadline from "../../components/TrendingHeadline/TrendingHeadline";
import MovieList from "../../components/MovieList/MovieList";
import PaginateMovie from "../../components/PaginateMovie/PaginateMovie";

import styles from "./HomePage.module.css";
import axios from "axios";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const total = useRef(500);
  const location = useLocation();
  const [param, setParam] = useSearchParams();
  const queryPage = param.get("page") ?? "1";
  const [currentPage, setCurrentPage] = useState(queryPage);
  const [_, setController] = useState(null);

  useEffect(() => {
    const currentController = new AbortController();
    setController(currentController);

    const getTrendMovie = async () => {
      try {
        const data = await fetchTrendMovie(currentPage, {
          signal: currentController.signal,
        });
        setMovies(data.results);
        total.current = data.total_pages > 500 ? 500 : data.total_pages;
      } catch (error) {
          if (!axios.isCancel(error)) {
           console.error(error);
          }
      }
    };

    getTrendMovie();

    return () => {
      currentController.abort();
    };
  }, [currentPage]);

  useEffect(() => {
    setParam({ page: currentPage });
  }, [currentPage, setParam]);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <TrendingHeadline />
      <MovieList movies={movies} location={location} />
      <PaginateMovie
        total={total.current}
        currentPage={currentPage}
        setCurrentPage={handlePage}
      />
    </>
  );
};

export default HomePage;
