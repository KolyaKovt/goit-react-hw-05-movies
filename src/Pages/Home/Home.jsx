import { fetchTrending } from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../../hooks/useData";

const Home = () => {
  const [movies, setMovies, error] = useData(fetchTrending);
  const location = useLocation();

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!movies) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={"movies/" + movie.id.toString()} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
