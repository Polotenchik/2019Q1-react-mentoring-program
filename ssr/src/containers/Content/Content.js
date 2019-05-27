import { connect } from 'react-redux';
import { openMovie } from '../../redux/movies/movies.actions';
import ContentView from './ContentView';

const mapStateToProps = store => ({
  searchAttributes: store.search,
  searchList: store.movies.searchList,
  recommendedList: store.movies.recommendedList,
  movieGenre: store.movies.currentMovieGenre,
  mode: store.mode,
  sortBy: store.movies.sortBy,
});

const mapDispatchToProps = dispatch => ({
  onOpenMovie(movie) {
    dispatch(openMovie(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
