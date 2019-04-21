import { connect } from "react-redux";
import { SummaryView } from './SummaryView';
import { changeItem } from '../../redux/mode/mode.actions';

const mapStateToProps = store => ({
    movieMode: store.mode.movie,
    searchPhrase: store.search.phrase,
    movieNumber: store.movies.searchList.length,
    movieModeGenre: store.movies.currentMovieGenre,
    searchType: store.search.type,
    sortBy: store.movies.sortBy
});

const mapDispatchToProps = dispatch => ({
    onChangeItem(newVal) {
        dispatch(changeItem(newVal))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SummaryView);