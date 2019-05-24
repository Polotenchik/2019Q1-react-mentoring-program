import React from 'react';

const MovieDescriptionPoster = ({ posterPath }) => (
    <div className="film-poster">
        <img src={ posterPath } />
    </div>
);

export default MovieDescriptionPoster;
