import React from 'react';

const MovieItemPoster = ({ posterLink, posterClick }) => (
    <div className='item-poster'>
        <img
            src={ posterLink }
            className='item-poster-img'
            onClick={ posterClick }
        />
    </div>
);

export default MovieItemPoster;
