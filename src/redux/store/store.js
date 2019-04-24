import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import state from '../initialState.json';
import { START_SEARCH, OPEN_MOVIE } from './store.constants';
import { resultsToStore, recommendedToStore } from './store.actions';

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

    return next(action);
}

const store = createStore(
    reducers,
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : state,
    composeWithDevTools(
        applyMiddleware(logger))
    
);

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
});
  
localStorage['redux-store'] = JSON.stringify(store.getState());

export default store;