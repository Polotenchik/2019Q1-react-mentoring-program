import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { Router, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import store from './redux/store/store';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <ErrorBoundaryContainer>
                <Route path='/' component={ Body } />
            </ErrorBoundaryContainer>
        </Router>
    </Provider>,
    document.getElementById('greeting')
);
