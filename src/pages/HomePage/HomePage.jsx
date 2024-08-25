import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { fetchTrendMovie } from "../../API/fetchMovies";
import TrendingHeadline from "../../components/TrendingHeadline/TrendingHeadline";
import MovieList from "../../components/MovieList/MovieList";
import PaginateMovie from "../../components/PaginateMovie/PaginateMovie";
import Loader from "../../components/Loader/Loader";

const MAX_PAGES = 500;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
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
        setIsLoad(true);
        const data = await fetchTrendMovie(currentPage);
        setMovies(data.results);
        total.current =
          data.total_pages > MAX_PAGES ? MAX_PAGES : data.total_pages;
      } catch (error) {
        navigate("/error", { replace: true, state: { from: location } });
      } finally {
        setIsLoad(false);
      }
    };
    queryPage === currentPage && getTrendMovie();
  }, [currentPage]);

  const handlePage = (page) => {
    setParam({ page });
  };

  return (
    <>
      <TrendingHeadline />
      {isLoad ? (
        <Loader />
      ) : (
        movies.length > 0 && (
          <>
            <MovieList movies={movies} location={location} />
            {total.current > 1 && (
              <PaginateMovie
                total={total.current}
                currentPage={currentPage}
                setCurrentPage={handlePage}
              />
            )}
          </>
        )
      )
      }
    </>
  );
};

export default HomePage;
