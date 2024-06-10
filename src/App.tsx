import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AppLayout from "./components/AppLayout";
import Movies from "./pages/Movies";
import Loading from "./components/Loading";

const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Movies />} />
          <Route
            path="/movie-details/:id"
            element={
              <Suspense fallback={<Loading />}>
                <MovieDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
