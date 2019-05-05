import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';


const Root = () => (
    <div>
        Server side rendering
    </div>
)

export default hot(module)(Root);