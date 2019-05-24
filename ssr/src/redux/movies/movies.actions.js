import { OPEN_MOVIE, FETCH_MOVIE_BY_ID } from './movies.constants';

export const openMovie = movie => (
  {
    type: OPEN_MOVIE,
    payload: {
      movieToOpen: { ...movie },
      movieGenre: movie['genres'][0],
      loadingData: true,
      searchType: 'genres'
    }
  }
);

export const fetchMovieById = id => (
  {
    type: FETCH_MOVIE_BY_ID,
    payload: {
      movieToFetch: id,
      loadingData: true,
    }
  }
);