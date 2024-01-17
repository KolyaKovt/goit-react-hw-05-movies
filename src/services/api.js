import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "61707ec553642d90cc0fd9f82c3b8f0a";

export const fetchTrending = async () => {
  const res = await axios.get("/movie/popular", {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data.results;
};

export const fetchMoviesByQuery = async q => {
  const res = await axios.get("/search/movie", {
    params: {
      query: q,
      api_key: API_KEY,
    },
  });

  return res.data.results;
};

export const fetchMoviesById = async id => {
  const res = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  console.log(res);
  return res.data;
};
