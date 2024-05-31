import { useAppSelector } from "../hooks";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

export default function Movies() {
  const movies = useAppSelector((state) => state.movies.value);

  return (
    <>
      <Header />
      <div className="mx-auto w-[98%] py-4">
        <ul className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
        <Pagination />
      </div>
    </>
  );
}
