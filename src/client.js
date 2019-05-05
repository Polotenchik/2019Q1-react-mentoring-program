import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';
import { Body } from './containers';
import './main.scss';

const root = (
    <Body />
);

hydrate(root, document.getElementById('root'));