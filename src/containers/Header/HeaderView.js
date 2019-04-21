import React from 'react';
import PropTypes from 'prop-types';
import { TopBarSection } from '../../components';
import Search from '../Search/Search';
import { MovieDescription } from '../index';

export const HeaderView = ({ movieMode, currentMovie, onOpenSearch }) => {

    return (
        <header className='header' style={{ "background": "#000 url('img/netflix-bg.jpg')" }}>
            <div className='header-container'>
                <TopBarSection  searchButtonClick={ onOpenSearch }  movieMode={ movieMode } />
                <Search />
                <MovieDescription info={ currentMovie } active={ movieMode } />
            </div>
        </header>
    );
};

HeaderView.defaultProps = {
    filmMode: false,
    currentFilm: {}
};