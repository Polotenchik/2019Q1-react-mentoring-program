import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import state from '../initialState.json';
import { START_SEARCH, OPEN_MOVIE, FETCH_MOVIE_BY_ID } from './store.constants';
import { resultsToStore, recommendedToStore, fetchMovie } from './store.actions';
import { composeWithDevTools } from 'redux-devtools-extension';

//TODO: move to helpers
const searchKeysAliases = {
    'sci fi': 'Science Fiction',
    'scifi': 'Science Fiction',
    'sci-fi': 'Science Fiction',
    'sf': 'Science Fiction',
    'melodrama': 'drama',
    'cartoon': "animation"
};

//TODO: move to api file
const RequestToServer = (phrase, searchBy, limit=20) =>
  new Promise((resolves, rejects) => {
    const api = `http://react-cdp-api.herokuapp.com/movies?search=${phrase}&searchBy=${searchBy}&limit=${limit}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
      (request.status === 200) ?
        resolves(JSON.parse(request.response)) :
        reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
});

const FetchMovieById = (id) => 
  new Promise((resolves, rejects) => {
    const api = `http://react-cdp-api.herokuapp.com/movies/${id}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
      (request.status === 200) ?
        resolves(JSON.parse(request.response)) :
        reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
});

const logger = store => next => action => {
    if (action.type === START_SEARCH) {
        let phrase = action.payload.searchPhrase;
        const type = action.payload.searchType;
        if (type === 'genres') {
            phrase = searchKeysAliases[phrase.toLowerCase()]
                ? searchKeysAliases[phrase.toLowerCase()] 
                : phrase; 
        }
        RequestToServer(phrase, type).then(
            info => store.dispatch(resultsToStore(info.data)),
            err => console.error(
              new Error("Cannot load films from server"))
        );
    }

    if (action.type === OPEN_MOVIE) {
        const phrase = action.payload.searchPhrase;
        const type = action.payload.searchType;
        RequestToServer(type, phrase).then(
          info => store.dispatch(recommendedToStore(info.data)),
          err => console.error(
            new Error("Cannot load films from server"))
        );
    }

    if (action.type === FETCH_MOVIE_BY_ID) {
        const id = action.payload.movieToFetch;
        FetchMovieById(id).then(
          info => store.dispatch(fetchMovie(info)),
          err => console.error(
            new Error("Cannot load film"))
        );
    }

    return next(action);
}

export default (initialState=state) => {
    const store = createStore(
        reducers, 
        initialState, 
        composeWithDevTools(applyMiddleware(logger))
    );

    return store;
};