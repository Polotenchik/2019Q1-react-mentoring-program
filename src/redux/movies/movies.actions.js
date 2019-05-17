import { OPEN_MOVIE } from './movies.constants';

const openMovie = movie => (
  {
    type: OPEN_MOVIE,
    payload: {
      movieToOpen: { ...movie },
      movieGenre: movie.genres[0],
      loadingData: true,
      searchType: 'genres',
    },
  }
);

export default openMovie;
