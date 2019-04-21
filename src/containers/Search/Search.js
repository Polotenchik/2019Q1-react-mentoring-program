import { connect } from 'react-redux';
import SearchView from './SearchView';
import { startSearch } from '../../redux/search/search.actions';

const mapStateToProps = store => ({
    searchMode: store.mode.search
});

const mapDispatchToProps = dispatch => ({
    onSearch(phrase, type) {
        dispatch(startSearch(phrase, type))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchView);