import React from 'react';

export default class ClassPureComponent extends React.PureComponent {
    render() {
        return (
            <h1>
                Hello world! I was created with React.PureComponent
            </h1>
        );
    }
}