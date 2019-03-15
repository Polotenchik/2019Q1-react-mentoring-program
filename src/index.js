import React from 'react';
import ReactDOM from 'react-dom';
import { createElementComponent } from './components/react-create-element';

ReactDOM.render(
    createElementComponent,
    document.getElementById('greeting-create-component')
);

 
//     <script type="text/babel">
//     const createElementComponent = React.createElement('h1', null, 'Hello world! I was created with React.createElement');
    
//     ReactDOM.render(createElementComponent,document.getElementById('greeting-create-component'));

//     class ClassElementComponent extends React.Component {
//         render() {
//             return (
//                 <h1>Hello world! I was created with React.Component</h1>
//             );
//         }
//     }

//     ReactDOM.render(<ClassElementComponent />, document.getElementById('greeting-class-component'));

//     class ClassPureComponent extends React.PureComponent {
//         render() {
//             return (
//                 <h1>Hello world! I was created with React.PureComponent</h1>
//             );
//         }
//     }

//     ReactDOM.render(<ClassPureComponent />, document.getElementById('greeting-pure-component'));

//     const FunctionalComponent = () => {
//         return (
//             <h1>Hello world! I was created with FunctionalComponent</h1>
//         );
//     }

//     ReactDOM.render(<FunctionalComponent />, document.getElementById('greeting-functional-component'));

// </script>