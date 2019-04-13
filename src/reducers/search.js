import { START_SEARCH } from '../actionTypes';
 
export const search = (state={}, action) => {
    switch (action.type) {
      case START_SEARCH :
      return {
        phrase: action.payload.searchPhrase,
        type: action.payload.searchType,
      };
      default:
        return state
    }
};