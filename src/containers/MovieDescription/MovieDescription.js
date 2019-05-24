import React from 'react';
import MovieDescriptionInfo from './MovieDescriptionInfo';
import MovieDescriptionPoster from './MovieDescriptionPoster';

const MovieDescription = ({ active, info }) => {
  if (active && info) {
    return (
            <div className="movie-description">
                <MovieDescriptionPoster posterPath={ info.poster_path } />
                <MovieDescriptionInfo info={ info } />
            </div>
    );
  }
  return null;
};

MovieDescription.defaulProps = {
  active: false,
  info: { },
};

export default MovieDescription;
