import { connect } from 'react-redux';
import SearchView from './SearchView';
import startSearch from '../../redux/search/search.actions';
import { selectSearchMode, selectSearchType } from '../../selectors/index';

const mapStateToProps = store => ({
  searchMode: selectSearchMode(store),
  searchType: selectSearchType(store),
});

const mapDispatchToProps = dispatch => ({
  onSearch(phrase, type) {
    dispatch(startSearch(phrase, type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
