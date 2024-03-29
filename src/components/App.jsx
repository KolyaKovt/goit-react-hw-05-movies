import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const Home = lazy(() => import("../Pages/Home/Home"));
const Movies = lazy(() => import("../Pages/Movies/Movies"));
const Movie = lazy(() => import("./Movie/Movie"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
