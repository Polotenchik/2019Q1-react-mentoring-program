import { OPEN_SEARCH, CHANGE_SORTING } from './mode.constants';

export const openSearch = () => (
  {
    type: OPEN_SEARCH,
    payload: {},
  }
);

export const changeItem = newCriterion => (
  {
    type: CHANGE_SORTING,
    payload: {
      chosenParameter: newCriterion,
    },
  }
);
