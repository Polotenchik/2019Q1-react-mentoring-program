import React from 'react';
import { TopBarSection } from '../../components';
import Search from '../Search/Search';
import { MovieDescription } from '../index';

const HeaderView = ({ movieMode, currentMovie, onOpenSearch }) => (
    <header className='header' style={{ background: "#000 url('img/netflix-bg.jpg')" }}>
        <div className='header-container'>
            <TopBarSection searchButtonClick={ onOpenSearch } movieMode={ movieMode } />
            <Search />
            <MovieDescription info={ currentMovie } active={ movieMode } />
        </div>
    </header>
);

HeaderView.defaultProps = {
  filmMode: false,
  currentFilm: {},
};

export default HeaderView;