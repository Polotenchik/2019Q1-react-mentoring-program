import React from 'react';

export default function CreateElementComponent() {
    return (React.createElement(
        'h1',
        null,
        'Hello world! I was created with React.createElement'
    ));
} 
