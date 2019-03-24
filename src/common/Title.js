import React from 'react';

export const Title = (props) => {

    return (
        <h2 className={
            props.type === 'headline' && 'title title-white title-uppercase'
        }>
            { props.content }
        </h2>
    );
};