import axios from "axios";

const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const URL = {
  trending: "trending/movie/day",
  searchById: "movie/",
  searchByName: "/search/movie",
};

const option = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};

export const fetchTrendMovie = async (page=1) => {
  const { data } = await axios.get(`${URL.trending}?page=${page}`, option);
  return data;
};

export const fetchMovieByName = async (movieName, page=1) => {
  const { data } = await axios.get(URL.searchByName, {
    ...option,
    params: {
      query: movieName,
      page,
      include_adult: false
    },
  });

  return data;
};

export const fetchMovieById = async (movie_id, type = '') => {
    const { data } = type
        ? await axios.get(`${URL.searchById}/${movie_id}/${type}`, option)
        : await axios.get(`${URL.searchById}/${movie_id}`, option);
    return data;
};
