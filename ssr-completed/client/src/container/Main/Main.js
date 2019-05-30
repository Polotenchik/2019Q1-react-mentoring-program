import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Film from '../../components/Film/Film';
import {
  fetchMovies, changePage, changeOffset, changeMoviesPerPage,
} from '../../store';
import {getUrl} from '../../constants';


class Main extends Component {

  componentWillMount() {
    const { match } = this.props;
    const { location } = this.props;
    if (location.search) {
        this.urlParse();
    }
    this.urlParseModify();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
 
    if ( location.search !== prevProps.location.search) {
      this.urlParse();
    }
  }

  urlParseModify = () => {
    const {fetchMovies, searchBy, sortBy, sortOrder, moviesPerPage, offset, term} = this.props;
    const url =  getUrl(searchBy, sortBy, sortOrder, location.pathname.slice(3).replace("-", "%20"), offset, moviesPerPage);
    fetchMovies(url);
  }


  urlParse = () => {
    const {fetchMovies, searchBy, sortBy, sortOrder, moviesPerPage, offset, term} = this.props;
    const url =  getUrl(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    fetchMovies(url);
  }

  render() {
    const {
      movies, location, loading, mode,
    } = this.props;

    if (loading) {
      return (
        <EmptyWrapper>Loading...</EmptyWrapper>
      );
    }
    if (!loading && !movies.length) {
      return (
        <EmptyWrapper>There is Empty Result</EmptyWrapper>
      );
    }
    return (
      <FilmsBackground>
        <FilmsWrapper>
          {movies.map((film) => <Film info={film} key={film.id} />)}
        </FilmsWrapper>
      </FilmsBackground>
    );
  }
}

export default withRouter(connect(({ search, movies, movie }) => ({
  activeFilm: movie.activeFilm,
  sameGenresFilms: movie.sameGenresFilms,
  currentPage: search.currentPage,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term,
  offset: search.offset,
  movies: movies.movies,
  total: movies.total,
  loading: movies.loading,
  mode: movies.mode,
}), {
  fetchMovies, changePage, changeOffset, changeMoviesPerPage,
})(Main));

Main.propTypes = {
  sameGenresFilms: PropTypes.shape({}),
  total: PropTypes.number,
  offset: PropTypes.number,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  currentPage: PropTypes.number,
  changeMoviesPerPage: PropTypes.func,
  moviesPerPage: PropTypes.number,
  term: PropTypes.string,
  sortOrder: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  fetchSameGenreMovies: PropTypes.func,
  changeOffset: PropTypes.func,
  changePage: PropTypes.func,
  fetchMovies: PropTypes.func,
  activeFilm: PropTypes.shape({}),
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

const FilmsBackground = styled.div`
    flex: 1 0 auto;
    width: 100%;    
    background-color: ${Theme.colors.white};  
    padding: 30px 0; 
`;

const FilmsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;    
`;

const EmptyWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${Theme.colors.red};
    font-size: 24px;
    flex: auto;
`;
