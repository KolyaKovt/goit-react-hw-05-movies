import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ hits }) => {
  const location = useLocation();

  return (
    <ul>
      {hits.map(hit => (
        <li key={hit.id}>
          <Link to={`/movies/${hit.id}`} state={{ from: location }}>
            {hit.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
