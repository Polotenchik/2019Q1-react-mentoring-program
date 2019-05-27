import { RESULTS_TO_STORE, RECOMMENDED_TO_STORE, RESULT_MOVIE } from './store.constants';

export const resultsToStore = results => (
  {
    type: RESULTS_TO_STORE,
    payload: {
      foundResults: results,
      loadingData: false,
    },
  }
);

export const recommendedToStore = results => (
  {
    type: RECOMMENDED_TO_STORE,
    payload: {
      foundRecommended: results,
      loadingData: false,
    },
  }
);

export const fetchMovie = results => (
  {
    type: RESULT_MOVIE,
    payload: {
      currentMovie: results,
      loadingData: false,
    },
  }
);
