import { NavLink } from "react-router-dom";
import { Movie } from "../interfaces/MovieInterface";

interface MovieListProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieListProps> = ({ movie }) => {
  const {
    title: movieTitle,
    overview: movieOverview,
    poster_path: movieImage,
    id: movieId,
  } = movie;

  return (
    <NavLink to={`/movie-details/${movieId}`}>
      <div className="relative bg-white border border-gray-200 rounded-lg group">
        <div className="w-full h-96">
          <img
            className="block object-cover w-full h-full rounded-t-lg group-hover:opacity-50"
            src={
              movieImage
                ? `https://image.tmdb.org/t/p/w500${movieImage}`
                : "/favicon.webp"
            }
            alt="movie-image"
            loading="lazy"
          />
        </div>

        <div className="p-2">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 truncate -webkit-box -webkit-box-orient-vertical -webkit-line-clamp-2">
            {movieTitle || movie.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 -webkit-box -webkit-box-orient-vertical line-clamp-[3]">
            {movieOverview ||
              "Lorem ipsum consectetur adipiscing dolor sit amet, consectetur adipiscing elit dolor sit amet..."}
          </p>
          <p className="absolute top-0 bottom-0 left-0 right-0 hidden text-xl font-bold text-center text-white capitalize opacity-50 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:bg-slate-500">
            view details
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
