import { useEffect, useState } from "react";
import { setMovies } from "../redux/MoviesSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function Header() {
  const movies = useAppSelector((state) => state.movies.value);
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    async function getData(query: string) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/${query}`);
        const data = await response.json();
        if (data.results.length > 0) {
          dispatch(setMovies(data.results));
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (searchInput.length === 0) {
      const timer = setTimeout(
        () =>
          getData(
            "movie/popular?api_key=14bdd69ce887376edfafb09f23f78fe9&page=1"
          ),
        3000
      );
      return () => clearTimeout(timer);
    }
    if (searchInput.length < 3 && searchInput.length !== 0) return;
    const timer = setTimeout(() => {
      getData(
        `search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${searchInput}`
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, searchInput, movies.length]);

  return (
    <div className="relative p-4 bg-slate-200 w-[98%] mx-auto">
      <input
        type="search"
        className="relative m-0 block w-full rounded border border-solid border-slate-900 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none "
        placeholder="Search"
        aria-label="Search"
        id="exampleFormControlInput4"
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}
