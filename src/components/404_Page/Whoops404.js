import React from 'react';

export const Whooops404 = ({ location }) => {
    return (
        <div className={'no-results'}>
            Resource not found at { location.pathname }
        </div>
    );
};