import ReactDOM from 'react-dom';
import React from 'react';
import CreateElementComponent from './components/react-create-element';
import ClassElementComponent from './components/react-component.jsx';
import ClassPureComponent from './components/react-pure-component';
import { FunctionalComponent } from './components/react-functional-component';

ReactDOM.render(
    <>
        <CreateElementComponent />
        <ClassElementComponent />
        <ClassPureComponent />
        <FunctionalComponent />
    </>,
    document.getElementById('greeting')
);
