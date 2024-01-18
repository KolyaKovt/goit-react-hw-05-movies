import Form from "../../components/Form/Form";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import { useEffect, useState } from "react";

const Movies = () => {
  const [hits, setHits] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlQuery = searchParams.get("query");
  
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchMoviesByQuery(urlQuery).then(setHits);
  }, [urlQuery]);

  const onSubmit = e => {
    e.preventDefault();

    const queryTrimmed = query.trim();
    setSearchParams(queryTrimmed ? { query: queryTrimmed } : {});
  };

  return (
    <>
      <Form onSubmit={onSubmit} query={query} setQuery={setQuery} />
      <MoviesList hits={hits} />
    </>
  );
};

export default Movies;
