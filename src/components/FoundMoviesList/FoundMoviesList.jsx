import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import { useEffect, useState } from "react";

const FoundMoviesList = () => {
  const [hits, setHits] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query");

  useEffect(() => {
    fetchMoviesByQuery(query).then(setHits);
  }, [query, searchParams]);

  return (
    <ul>
      {hits.map(hit => (
        <li key={hit.id}>
          <Link to={hit.id.toString()} state={{ from: location }}>
            {hit.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoundMoviesList;
