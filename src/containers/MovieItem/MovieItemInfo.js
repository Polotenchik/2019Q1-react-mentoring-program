import React from 'react';

const MovieItemInfo = ({ movieTitle, releaseDate, genre }) => (
    <div className='item-info'>
        <div className='item-info-details'>
        <div className='film-title'>
            { movieTitle.length > 16 ? `${movieTitle.slice(0, 18)}...` : movieTitle }
        </div>
        <div className='release-date'>
            { releaseDate.slice(0, 4) }
        </div>
        </div>
        <div className='item-info-genre'>
            { genre.join(', ') }
        </div>
    </div>
);

export default MovieItemInfo;
