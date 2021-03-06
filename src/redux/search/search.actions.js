import START_SEARCH from './search.constants';

const startSearch = (phrase, type) => ({
  type: START_SEARCH,
  payload: {
    searchPhrase: phrase,
    searchType: type,
    replaceCurrentResultsBy: [],
    loadingData: true,
  },
});

export default startSearch;
