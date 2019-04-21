import { combineReducers } from 'redux';
import mode from './mode/mode.reducer';
import movies from './movies/movies.reducer';
import search from './search/search.reducer';

export default combineReducers({
    mode,
    movies,
    search
});