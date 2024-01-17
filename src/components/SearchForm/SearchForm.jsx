const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
