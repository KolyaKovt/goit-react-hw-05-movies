import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const beforeSubmit = e => {
    e.preventDefault();

    const queryTrimmed = query.trim();
    onSubmit(queryTrimmed);
  };

  return (
    <form onSubmit={beforeSubmit}>
      <input
        value={query}
        type="text"
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
