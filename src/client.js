import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';
import { Body } from './containers';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';

const root = (
    <Root
        Router = { BrowserRouter }
    />
);

hydrate(root, document.getElementById('root'));