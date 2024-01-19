import Form from "../../components/Form/Form";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import { useEffect, useState } from "react";

const Movies = () => {
  const [hits, setHits] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlQuery = searchParams.get("query");

  useEffect(() => {
    if (!urlQuery) {
      setHits([]);
      return;
    }

    fetchMoviesByQuery(urlQuery).then(setHits);
    console.log(urlQuery);
  }, [urlQuery]);

  const onSubmit = query => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <MoviesList hits={hits} />
    </>
  );
};

export default Movies;
