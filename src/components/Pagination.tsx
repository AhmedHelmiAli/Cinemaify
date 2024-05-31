import { useEffect, useState } from "react";
import { Pagination as Paginator } from "flowbite-react";
import { setMovies } from "../redux/MoviesSlice";
import { useAppDispatch } from "../hooks";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Pagination() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<unknown>("");

  const onPageChange = (page: number) => {
    setPage(page);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=14bdd69ce887376edfafb09f23f78fe9&page=${page}`
        );

        const data = await response.json();
        if (data.success === false) {
          throw new Error(data["status_message"]);
        } else {
          dispatch(setMovies(data.results));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [dispatch, page]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error as string} />;

  return (
    <div className="flex items-center w-[70%] justify-center mx-auto my-8">
      <Paginator
        currentPage={page}
        totalPages={300}
        onPageChange={onPageChange}
      />
    </div>
  );
}
