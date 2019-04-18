import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openSearch } from '../../actions';
import { TopBarSection } from '../../components';
import Search from '../Search/Search';
import { MovieDescription } from '../index';

const Header = ({ movieMode, currentMovie, onOpenSearch }) => {

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

Header.defaultProps = {
    filmMode: false,
    currentFilm: {}
};

const mapStateToProps = store => ({
    movieMode: store.mode.movie,
    currentMovie: store.movies.currentMovie,
});

const mapDispatchToProps = dispatch => ({
    onOpenSearch() {
        dispatch(openSearch())
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);