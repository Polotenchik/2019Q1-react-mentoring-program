import React from 'react';

export const MovieItemPoster = ({ posterLink, posterClick }) => (
        <div className='item-poster'>
            <img
                src={ posterLink }
                className='item-poster-img'
                onClick={ posterClick }
            />
        </div>
);
