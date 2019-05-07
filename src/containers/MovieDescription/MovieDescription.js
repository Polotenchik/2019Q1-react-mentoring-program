import { connect } from 'react-redux';
import { MovieDescriptionView } from './MovieDescriptionView';

const mapStateToProps = store => ({
    movieMode: store.mode.movie,
    currentMovie: store.movies.currentMovie,
});

const mapDispatchToProps = dispatch => ({

});
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieDescriptionView);