import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mode from './mode';
import movies from './movies';
import movieSorting from './movieSorting';
import search from './search';

export default combineReducers({
    routing: routerReducer,
    mode,
    movies,
    movieSorting,
    search
});