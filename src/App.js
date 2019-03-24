import React from 'react';
import { Body } from './containers/Body.js';

export const App = () => {
    return (
        <>
            <Body contentType={'no_films'} headerType={'search'} />
            <Body contentType={'films'} headerType={'search'} />
            <Body contentType={'films'} headerType={'info'} />
        </>
    );
}


