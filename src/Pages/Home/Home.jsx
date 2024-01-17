import { fetchTrending } from "../../services/api";
import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";

const Home = () => {
  const [movies, setMovies, error] = useData(fetchTrending);

  if (error) {
    return (<h1>{error}</h1>)
  }

  if (!movies) {
    return (<h1>loading</h1>)
  }

  console.log(movies);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={"movies/" + movie.id.toString()}>
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
