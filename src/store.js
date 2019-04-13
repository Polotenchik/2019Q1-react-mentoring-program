import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import state from './initialState.json';

const store = createStore(
    reducers,
    state
);

export default store;