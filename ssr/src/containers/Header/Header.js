import { connect } from 'react-redux';
import { HeaderView } from './HeaderView';
import { openSearch } from '../../redux/mode/mode.actions';
import { fetchMovieById } from '../../redux/movies/movies.actions';

const mapStateToProps = store => ({
  movieMode: store.mode.movie,
  currentMovie: store.movies.currentMovie,
});

const mapDispatchToProps = dispatch => ({
  onOpenSearch() {
    dispatch(openSearch());
  },
  onFetchMovieById(id) {
    dispatch(fetchMovieById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);
