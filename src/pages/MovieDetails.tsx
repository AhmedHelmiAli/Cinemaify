import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { AllMovieDetails } from "../interfaces/MovieDetailsInterface";
import formatRuntime from "../utils/services";
import Loading from "../components/Loading";

export default function MovieDetails() {
  const { id: movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<AllMovieDetails>({});
  const movieImage = movie["backdrop_path"] ? movie["backdrop_path"] : "";

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=14bdd69ce887376edfafb09f23f78fe9`
        );

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col justify-center my-6">
      <div className="relative flex flex-col max-w-lg p-3 mx-auto space-y-3 bg-white border border-white shadow-lg sm:flex-row sm:space-x-5 md:space-y-0 rounded-xl sm:max-w-4xl">
        <div className="grid w-full bg-white sm:w-1/3 place-items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieImage}`}
            alt="movie-image"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col w-full p-3 space-y-2 bg-white sm:w-2/3">
          <div className="flex justify-between item-center">
            <p className="hidden font-medium text-gray-500 sm:block">
              {movie.release_date?.split("-")[0]}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400">
                <FaStar />
              </span>

              <p className="ml-1 text-sm font-bold text-gray-600">
                {movie.vote_average?.toFixed(1)}
                <span className="font-normal text-gray-500">
                  ({movie.vote_count} reviews)
                </span>
              </p>
            </div>
            <div className="text-red-500">
              <FaHeart />
            </div>
            <div className="hidden px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full sm:block">
              {movie.status}
            </div>
          </div>
          <h3 className="text-xl font-black text-gray-800 sm:text-3xl">
            {movie.title}
          </h3>
          <p className="h-auto text-base text-gray-500 sm:h-full md:text-lg">
            {movie.overview}
          </p>
          <p className="text-xl font-black text-gray-800">
            {formatRuntime(movie.runtime || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
