import React from 'react';
import PropTypes from 'prop-types';
import { MovieDescriptionInfo } from './MovieDescriptionInfo';
import { MovieDescriptionPoster } from './MovieDescriptionPoster'

export const MovieDescription = ({ active, info }) => {
    if (active && info) {
       return ( 
            <div className="movie-description">
                <MovieDescriptionPoster posterPath={ info['poster_path'] } />
                <MovieDescriptionInfo info={ info } />
            </div>
        ); 
    } else {
        return null;
    }
};

MovieDescription.defaulProps = {
    active: false,
    info: { }
};