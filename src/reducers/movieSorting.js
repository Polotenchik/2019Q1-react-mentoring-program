import { CHANGE_SORTING } from '../actionTypes';

const moviesSorting = (state={}, action) => {
    switch (action.type) {
      case CHANGE_SORTING :
        return {
          ...state,
          chosenParameter: action.payload.chosenParameter
        };
      default:
        return state
    }
};