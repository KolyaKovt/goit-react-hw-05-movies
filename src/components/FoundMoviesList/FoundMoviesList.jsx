import { Link } from "react-router-dom";

const FoundMoviesList = ({ hits, query }) => {
  return (
    <ul>
      {hits.map(hit => (
        <li key={hit.id}>
          <Link to={hit.id.toString()} state={{ from: `/movies?query=${query}` }}>
            {hit.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoundMoviesList;
