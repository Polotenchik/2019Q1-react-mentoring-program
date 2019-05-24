import React from 'react';
import { Label } from '../../common';
import FilmSort from './film-sort';

const SummaryView = (props) => {
  const {
    movieMode, searchPhrase, movieNumber, movieModeGenre, searchType, sortBy, onChangeItem,
  } = props;

  return (
        <div className='summary'>
            <div className='summary-wrapper'>
                { movieMode && <Label content={`Films by ${movieModeGenre} genre`} /> }
                {
                  !movieMode
                  && <Label content={`Found ${movieNumber} movies for ${searchPhrase} by ${searchType}` } />
                }
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

export default SummaryView;
