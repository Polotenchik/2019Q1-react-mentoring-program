import { connect } from 'react-redux';
import HeaderView from './HeaderView';
import { openSearch } from '../../redux/mode/mode.actions';
import { selectMovieMode, selectCurrentMovie } from '../../selectors/index';

const mapStateToProps = store => ({
  movieMode: selectMovieMode(store),
  currentMovie: selectCurrentMovie(store),
});

const mapDispatchToProps = dispatch => ({
  onOpenSearch() {
    dispatch(openSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);
