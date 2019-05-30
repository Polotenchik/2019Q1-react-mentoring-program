import { call, put, all, takeLatest } from 'redux-saga/effects';
//import axios from 'axios';

import {FETCH_MOVIE} from "../../constants/index";

import {updateMovie, updateSameGenresFilms} from "../../store";

export function* fetchMovieAsync(action) {
  //const response = yield call(axios.get, `http://react-cdp-api.herokuapp.com/movies/${action.id}`);
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${action.id}`);
  //const activeFilm = yield response.data;
  const results = yield response.json();
  //const genre = yield  response.data.genres[0];
  //yield put(updateMovie(activeFilm));
  yield put(updateMovie(results));
 // const genreResponse = yield call(axios.get, `https://reactjs-cdp.herokuapp.com/movies?filter=${genre}`);
  //const sameGenresFilms = genreResponse.data.data;
 // yield put(updateSameGenresFilms(sameGenresFilms));
}

export function* watchFetchMovie() {
  yield takeLatest(FETCH_MOVIE, fetchMovieAsync);
}