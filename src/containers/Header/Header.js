import React from 'react';
import { connect } from 'react-redux';
import { openSearch } from '../../actions';
import { TopBarSection } from '../../components';
import { Search, MovieDescription } from '../index';

export const Header = ({ movieMode, currentMovie, onOpenSearch }) => {

    return (
        <header className='header' style={{ "background": "#000 url('img/netflix-bg.jpg')" }}>
            <div className='header-container'>
                <TopBarSection />
                <Search />
                <MovieDescription />
            </div>
        </header>
    );
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