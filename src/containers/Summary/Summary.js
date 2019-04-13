import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { changeItem } from '../../actions';
import { Label, Button } from '../../common';
import { FilmSort } from './film-sort';

export const Summary = ({ movieMode, searchPhrase, movieNumber, movieModeGenre, searchType, sortBy, onChangeItem }) => {

    return (
        <div className='summary'>
            <div className='summary-wrapper'>
                { movieMode && <Label content={'Films by ' + movieModeGenre + ' genre'} /> }
                { !movieMode && <Label content={'Found ' + movieNumber +' movies for ' + searchPhrase + ' by ' + searchType } /> }
                {/* <FilmSort sortParameters={sortBy} onParameterClick={onChangeItem}/> */}
            </div>
        </div>
    );
}

Summary.defaultProps = {
    movieMode: false,
    searchPhrase: '',
    movieNumber: 0,
    movieModeGenre: '',
    searchType: 'title',
    onChangeItem: f => f
};


const mapStateToProps = store => ({
    movieMode: store.mode.movie,
    searchPhrase: store.search.phrase,
    movieNumber: store.movies.searchList.length,
    movieModeGenre: store.movies.currentMovieGenre,
    searchType: store.search.type,
    sortBy: store.movies.sortBy
});

const mapDispatchToProps = dispatch => ({
    onChangeItem(newVal) {
        dispatch(changeItem(newVal))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Summary);