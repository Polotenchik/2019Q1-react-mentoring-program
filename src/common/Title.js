import React from 'react';

export const Title = (props) => {

    return (
        <h2 className={
            (props.type === 'headline' && 'title title-white title-uppercase')
            || (props.type === 'info' && 'title title-red title-big')
            || null
        }>
            { props.content }
        </h2>
    );
};