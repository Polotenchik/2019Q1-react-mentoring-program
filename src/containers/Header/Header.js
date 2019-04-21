import { connect } from 'react-redux';
import { HeaderView } from './HeaderView';
import { openSearch } from '../../redux/mode/mode.actions';

const mapStateToProps = store => ({
    movieMode: store.mode.movie,
    currentMovie: store.movies.currentMovie,
});

const mapDispatchToProps = dispatch => ({
    onOpenSearch() {
        dispatch(openSearch())
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);