import START_SEARCH from './search.constants';

export default (state = {}, action) => {
  switch (action.type) {
    case START_SEARCH:
      return {
        phrase: action.payload.searchPhrase,
        type: action.payload.searchType,
      };
    default:
      return state;
  }
};
