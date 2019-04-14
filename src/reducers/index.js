import { combineReducers } from 'redux';
import mode from './mode';
import movies from './movies';
import search from './search';

export default combineReducers({
    mode,
    movies,
    search
});