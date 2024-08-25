import imgTemplate from "../assets/no_poster_available.jpg";
import { imgAPIPath } from "../API/imgPath";
import { convertAmount } from "./convertAmount";
import { convertMinToHour } from "./convertMinToHour";

export const convertMovieDetails = ({
  id,
  title,
  release_date,
  overview,
  vote_average,
  budget,
  revenue,
  backdrop_path,
  runtime,
  genres,
  poster_path,
}) => {
  const date = new Date(release_date);
  return {
    id,
    title,
    year: date.getFullYear(),
    release_date: date?.toLocaleDateString() || "N/A",
    overview: overview ? overview : "Maybe it is something interesting.",
    vote_average: vote_average?.toFixed(1) || "0",
    budget: budget ? convertAmount(budget) : "N/A",
    revenue: revenue ? convertAmount(revenue) : "N/A",
    backdrop_path: backdrop_path ? imgAPIPath + backdrop_path : "",
    runtime: runtime ? convertMinToHour(runtime) : "",
    genres,
    poster_path: poster_path ? imgAPIPath + poster_path : imgTemplate,
  };
};
