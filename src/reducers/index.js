import { combineReducers } from 'redux';
import mode from './mode';
import movies from './movies';
import movieSorting from './movieSorting';
import search from './search';

export default combineReducers({
    mode,
    movies,
    movieSorting,
    search
});