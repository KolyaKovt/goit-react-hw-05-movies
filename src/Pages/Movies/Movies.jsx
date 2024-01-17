import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "../../services/api";
import { useNavigate } from "react-router-dom";
import FoundMoviesList from "../../components/FoundMoviesList/FoundMoviesList";

const Movies = () => {
  const [hits, setHits] = useState([]);
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const q = e.target.elements.q.value;

    fetchMoviesByQuery(q).then(setHits);
    navigate(`?query=${q}`);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {hits.length !== 0 && <FoundMoviesList hits={hits} />}
    </>
  );
};

export default Movies;
