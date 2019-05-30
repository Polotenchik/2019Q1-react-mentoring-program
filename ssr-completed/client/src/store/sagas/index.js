import { all } from 'redux-saga/effects';

//import { moviesSaga } from "./moviesSaga";
//import { movieSaga } from "./movieSaga";
import { watchFetchMovies } from "./moviesSaga";
import { watchFetchMovie } from "./movieSaga";

function* moviesSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovie(),
  ]);
}

export default function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
};