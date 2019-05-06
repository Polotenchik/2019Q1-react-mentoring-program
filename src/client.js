import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';
import { Body } from './containers';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import './main.scss';

const store = configureStore(window.PRELOADED_STATE);

const root = (
    <Root
        Router = { BrowserRouter }
        store={ store }
    />
);

hydrate(root, document.getElementById('root'));