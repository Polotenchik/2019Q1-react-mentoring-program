import { connect } from 'react-redux';
import SummaryView from './SummaryView';
import { changeItem } from '../../redux/mode/mode.actions';
import {
  selectMovieMode, selectSearchPhrase, selectMovieNumber, selectMovieGenre, selectSearchType, selectMovieSort,
} from '../../selectors/index';


const mapStateToProps = store => ({
  movieMode: selectMovieMode(store),
  searchPhrase: selectSearchPhrase(store),
  movieNumber: selectMovieNumber(store),
  movieModeGenre: selectMovieGenre(store),
  searchType: selectSearchType(store),
  sortBy: selectMovieSort(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeItem(newVal) {
    dispatch(changeItem(newVal));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryView);
