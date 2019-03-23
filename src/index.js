import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { Body } from './containers/Body.js';

ReactDOM.render(
    <>
        <Body content={'no_films'} />
        <Body content={'films'}/>
    </>,
    document.getElementById('greeting')
);
