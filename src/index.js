import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { Body } from './containers/Body.js';

ReactDOM.render(
    <>
        <Body contentType={'no_films'} headerType={'search'} />
        <Body contentType={'films'} headerType={'search'} />
        <Body contentType={'films'} headerType={'info'} />
    </>,
    document.getElementById('greeting')
);
