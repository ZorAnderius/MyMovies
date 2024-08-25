import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { fetchMovieByName } from "../../API/fetchMovies";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import PaginateMovie from "../../components/PaginateMovie/PaginateMovie";
import Loader from "../../components/Loader/Loader";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
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
        setIsLoad(true);
        const data = await fetchMovieByName(query, currentPage);
        setMovies(data.results);
        total.current = data.total_pages > 500 ? 500 : data.total_pages;
      } catch (error) {
        navigate("/error", { replace: true });
      } finally {
        setIsLoad(false);
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
      {isLoad ? (
        <Loader />
      ) : (
        (movies.length > 0 && (
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
        )) ||
        (query && movies.length === 0 && <NoDataFound query={query} />)
      )}
    </>
  );
};

export default MoviePage;
