import React from 'react';

export const MovieDescriptionPoster = ({ posterPath }) => {

    return (
        <div className="film-poster">
            <img src={posterPath} />
        </div>  
    );
}
    
