import React from 'react';

export const MovieItemPoster = (props) => {
    return (
        <div className='item-poster'>
            <img 
                src={ props.posterLink } 
                className='item-poster-img' 
                onClick={ () => { props.handler(props.id) } } 
            />
        </div>
    );
};