import React from 'react';
import PropTypes from 'prop-types';
import { MovieDescriptionInfo } from './MovieDescriptionInfo';
import { MovieDescriptionPoster } from './MovieDescriptionPoster';
import { Whooops404 } from '../../components';


export class MovieDescriptionView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.movieMode && this.props.currentMovie) {
      const obj = Object.keys(this.props.currentMovie);
      if (obj.length === 0) {
        return (
                    <div className={'no-found'}>
                        Resource not found
                    </div>
        );
      }

      return (
                <div className="movie-description">
                    <MovieDescriptionPoster posterPath={ this.props.currentMovie.poster_path } />
                    <MovieDescriptionInfo info={ this.props.currentMovie } />
                </div>
      );
    }
    return null;
  }
}


MovieDescriptionView.defaulProps = {
  movieMode: false,
  info: { },
};
