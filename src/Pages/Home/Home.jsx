import { fetchTrending } from "../../services/api";
import { useData } from "../../hooks/useData";
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [movies, setMovies, error] = useData(fetchTrending);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!movies) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList hits={movies} />
    </div>
  );
};

export default Home;
