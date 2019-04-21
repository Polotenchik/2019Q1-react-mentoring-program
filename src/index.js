import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { Provider } from 'react-redux';
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import store from './redux/store/store';


ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundaryContainer>
            <Body />
        </ErrorBoundaryContainer>
    </Provider>,
    document.getElementById('greeting')
);
