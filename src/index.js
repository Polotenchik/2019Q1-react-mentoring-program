import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { Provider } from 'react-redux';
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import App from './App';
import store from './store';


ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundaryContainer>
            <App />
        </ErrorBoundaryContainer>
    </Provider>,
    document.getElementById('greeting')
);
