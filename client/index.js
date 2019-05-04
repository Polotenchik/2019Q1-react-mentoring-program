import 'babel-polyfill';
import React from 'react';
import './main.scss';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import { Whooops404 } from './components';
import store from './redux/store/store';



ReactDOM.render(
    <div>
        Hello world
    </div>,
    document.getElementById('root')
);
