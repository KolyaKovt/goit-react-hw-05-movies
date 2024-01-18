const Form = ({ onSubmit, query, setQuery }) => {
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

export default Form;
