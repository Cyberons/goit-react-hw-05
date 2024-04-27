import axios from "axios";

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmQ2MmZlYzRhNGJmNmM4NTBjZDhmNmIwOGFlYzkzOCIsInN1YiI6IjY2MmNhNWE0YzNhYTNmMDEyYmZjYWQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7QR8sXNOZVivz0QuehuBPF5CcwhDi2U_LPJs8E1H9ZI";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiToken}`;
  return config;
});

export const getMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMoviesSearch = async (searchQuery) => {
  const response = await axios.get("3/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US",
      // page: 1,
    },
  });
  return response.data.results;
};

export const getMovieId = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdCredits = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      // page: 1,
    },
  });
  return response.data;
};