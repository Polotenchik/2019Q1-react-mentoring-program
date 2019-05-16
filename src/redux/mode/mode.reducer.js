import { OPEN_MOVIE, OPEN_SEARCH, START_SEARCH,
    RESULTS_TO_STORE, RECOMMENDED_TO_STORE, FETCH_MOVIE_BY_ID } from './mode.constants';

export default (state={}, action) => {
  switch (action.type) {
  case OPEN_MOVIE:
    return {
      ...state,
      search: false,
      movie: true,
      loadingData: action.payload.loadingData
    };
  case FETCH_MOVIE_BY_ID:
    return {
      ...state,
      search: false,
      movie: true
    };
  case OPEN_SEARCH:
    return {
      ...state,
      search: true,
      movie: false
    };
  case START_SEARCH:
    return {
      ...state,
      loadingData: action.payload.loadingData
    };
  case RESULTS_TO_STORE:
    return {
      ...state,
      loadingData: action.payload.loadingData
    };
  case RECOMMENDED_TO_STORE:
    return {
      ...state,
      loadingData: action.payload.loadingData
    };
  default:
    return state;
  }
};