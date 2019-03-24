import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import ErrorBoundaryContainer from './containers/ErrorBoundaryContainer';
import { App } from './App';


ReactDOM.render(
    <ErrorBoundaryContainer>
        <App />
    </ErrorBoundaryContainer>,
    document.getElementById('greeting')
);
