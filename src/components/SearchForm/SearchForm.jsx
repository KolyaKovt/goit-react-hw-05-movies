const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="q" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
