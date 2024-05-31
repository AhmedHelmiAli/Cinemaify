import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Movies />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
