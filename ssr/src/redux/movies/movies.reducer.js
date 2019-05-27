import {
  START_SEARCH, OPEN_MOVIE, CHANGE_SORTING, RESULT_MOVIE,
  RESULTS_TO_STORE, RECOMMENDED_TO_STORE, FETCH_MOVIE_BY_ID,
} from './movies.constants';

const moviesSorting = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SORTING:
      return {
        ...state,
        chosenParameter: action.payload.chosenParameter,
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case START_SEARCH:
      return {
        ...state,
        searchList: action.payload.replaceCurrentResultsBy,
      };
    case OPEN_MOVIE:
      return {
        ...state,
        currentMovie: action.payload.movieToOpen,
        currentMovieGenre: action.payload.movieGenre,
      };
    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        currentMovie: action.payload.movieToFetch,
      };
    case CHANGE_SORTING:
      return {
        ...state,
        sortBy: moviesSorting(state.sortBy, action),
      };
    case RESULTS_TO_STORE:
      return {
        ...state,
        searchList: action.payload.foundResults,
      };
    case RECOMMENDED_TO_STORE:
      return {
        ...state,
        recommendedList: action.payload.foundRecommended,
      };
    case RESULT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload.currentMovie,
      };
    default:
      return state;
  }
};
