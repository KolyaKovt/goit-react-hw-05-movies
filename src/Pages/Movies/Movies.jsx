import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import FoundMoviesList from "../../components/FoundMoviesList/FoundMoviesList";

const Movies = () => {
  const [hits, setHits] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    fetchMoviesByQuery(query).then(setHits);
  }, [query, searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;

    setSearchParams({
      query,
    });

    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {hits.length !== 0 && <FoundMoviesList hits={hits} query={query} />}
    </>
  );
};

export default Movies;
