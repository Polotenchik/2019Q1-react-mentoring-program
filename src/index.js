import ReactDOM from 'react-dom';
import React from 'react';
import CreateElementComponent from './components/react-create-element';
import ClassElementComponent from './components/react-component';
import ClassPureComponent from './components/react-pure-component';
import { FunctionalComponent } from './components/react-functional-component';

ReactDOM.render(
    <CreateElementComponent />,
    document.getElementById('greeting-create-component')
);

ReactDOM.render(
    <ClassElementComponent />, 
    document.getElementById('greeting-class-component')
);

ReactDOM.render(
    <ClassPureComponent />, 
    document.getElementById('greeting-pure-component')
);

ReactDOM.render(
    <FunctionalComponent />,
    document.getElementById('greeting-functional-component')
);