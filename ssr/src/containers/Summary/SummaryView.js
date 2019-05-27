import React from 'react';
import PropTypes from 'prop-types';
import { Label, Button } from '../../common';
import { FilmSort } from './film-sort';

export const SummaryView = (props) => {
  const {
    movieMode, searchPhrase, movieNumber, movieModeGenre, searchType, sortBy, onChangeItem,
  } = props;

  return (
        <div className='summary'>
            <div className='summary-wrapper'>
                { movieMode && <Label content={`Films by ${movieModeGenre} genre`} /> }
                { !movieMode && <Label content={`Found ${movieNumber} movies for ${searchPhrase} by ${searchType}` } /> }
                <FilmSort sortParameters={ sortBy } onParameterClick={ onChangeItem }/>
            </div>
        </div>
  );
};

SummaryView.defaultProps = {
  movieMode: false,
  searchPhrase: '',
  movieNumber: 0,
  movieModeGenre: '',
  searchType: 'title',
  onChangeItem: f => f,
};
