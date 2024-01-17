import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import { useData } from "../../hooks/useData";

const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData, error] = useData(fetchMoviesById, movieId);

  if (!movieData) {
    return <h1>loading</h1>;
  }

  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";
    
  return (
    <>
      <Link to={"/"}>Go back</Link>

      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      {/* <img src={  "https://api.themoviedb.org" + movie.backdrop_path} alt="" /> */}
      <Outlet />
    </>
  );
};

export default Movie;
