import { connect } from 'react-redux';
import openMovie from '../../redux/movies/movies.actions';
import ContentView from './ContentView';
import {
  selectSearch, selectSearchList, selectRecommendedList, selectMovieGenre, selectMode, selectMovieSort,
} from '../../selectors/index';

const mapStateToProps = store => ({
  searchAttributes: selectSearch(store),
  searchList: selectSearchList(store),
  recommendedList: selectRecommendedList(store),
  movieGenre: selectMovieGenre(store),
  mode: selectMode(store),
  sortBy: selectMovieSort(store),
});

const mapDispatchToProps = dispatch => ({
  onOpenMovie(movie) {
    dispatch(openMovie(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
