import { createSelector } from 'reselect';

export const selectSearchMode = createSelector(
    store => store.mode.search,
    search => search,
);

export const selectSearchType = createSelector(
    store => store.search.type,
    type => type,
);

export const selectMovieMode = createSelector(
    store => store.mode.movie,
    movie => movie,
);

export const selectCurrentMovie= createSelector(
    store => store.movies.currentMovie,
    currentMovie => currentMovie,
);

export const selectSearchPhrase = createSelector(
    store => store.search.phrase,
    phrase => phrase,
);

export const selectMovieNumber = createSelector(
    store => store.movies.searchList.length,
    len => len,
);

export const selectMovieGenre = createSelector(
    store => store.movies.currentMovieGenre,
    genre => genre,
);

export const selectMovieSort = createSelector(
    store => store.movies.sortBy,
    sortBy => sortBy,
);

export const selectSearch = createSelector(
    store => store.search,
    search => search,
);

export const selectSearchList = createSelector(
    store => store.movies.searchList,
    list => list,
);

export const selectRecommendedList = createSelector(
    store => store.movies.recommendedList,
    list => list,
);

export const selectMode = createSelector(
    store => store.mode,
    mode => mode,
);
