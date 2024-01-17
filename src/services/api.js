export const fetchTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTcwN2VjNTUzNjQyZDkwY2MwZmQ5ZjgyYzNiOGYwYSIsInN1YiI6IjY1YTdjMTJiNTFjMDFmMDEzMTYwYmI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EtRMN1TtVms5bCVy9mG8X6Ce3zJX36GLfRBnmyLpOj8",
    },
  };

  const ans = await fetch(url, options);
  const res = await ans.json();

  return res.results;
};

export const fetchMoviesByQuery = async q => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTcwN2VjNTUzNjQyZDkwY2MwZmQ5ZjgyYzNiOGYwYSIsInN1YiI6IjY1YTdjMTJiNTFjMDFmMDEzMTYwYmI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EtRMN1TtVms5bCVy9mG8X6Ce3zJX36GLfRBnmyLpOj8",
    },
  };

  const ans = await fetch(url, options);
  const res = await ans.json();
  return res.results;
};

export const fetchMoviesById = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=61707ec553642d90cc0fd9f82c3b8f0a`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTcwN2VjNTUzNjQyZDkwY2MwZmQ5ZjgyYzNiOGYwYSIsInN1YiI6IjY1YTdjMTJiNTFjMDFmMDEzMTYwYmI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EtRMN1TtVms5bCVy9mG8X6Ce3zJX36GLfRBnmyLpOj8",
    },
  };

  const ans = await fetch(url, options);
  const res = await ans.json();
  return res;
};
