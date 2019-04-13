import {  START_SEARCH, RESULTS_TO_STORE, OPEN_MOVIE,
          RECOMMENDED_TO_STORE, OPEN_SEARCH, CHANGE_SORTING } from './actionTypes';

export const startSearch = (phrase, type) => (
    {type: START_SEARCH,
     payload: {
        searchPhrase: phrase,
        searchType: type,
        replaceCurrentResultsBy: [],
        loadingData: true
      }
    });
  
  export const resultsToStore = results =>
    ({type: RESULTS_TO_STORE,
      payload: {
        foundResults: results,
        loadingData: false
      }
    });
  
  export const openMovie = movie =>
    ({type: OPEN_MOVIE,
     payload: {
        movieToOpen: { ...movie },
        movieGenre: movie['genres'][0],
        loadingData: true,
        searchType: 'genres'
      }
    });
  
  export const recommendedToStore = results => ({
      type: RECOMMENDED_TO_STORE,
      payload: {
        foundRecommended: results,
        loadingData: false
      }
    });
  
  export const openSearch = () =>
    ({type: OPEN_SEARCH,
      payload: {}
    });
  
  export const changeItem = newCriterion =>
    ({type: CHANGE_SORTING,
      payload: {
        chosenParameter: newCriterion
      }
    });
  