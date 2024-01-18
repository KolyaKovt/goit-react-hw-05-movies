import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [_, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const queryTrimmed = query.trim();
    setSearchParams(queryTrimmed ? { query: queryTrimmed } : {});
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={query}
        type="text"
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
