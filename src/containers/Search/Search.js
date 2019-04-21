import React from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../redux/search/search.actions';
import { Input, Title } from '../../common';
import { TypeSection } from './TypeSection';
import { ButtonSection } from './ButtonSection';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTypes: {
            list: ['title', 'genres'],
            active: 'title'
          },
          currentInputValue: ''
        };
    }

    startSearching = () => {
        this.props.onSearch(this.state.currentInputValue, this.state.searchTypes.active);
        this.setState({ currentInputValue: '' })
    };

    enterKeyPressedOnInput = (e) => {
        if (e.key === 'Enter') {
          this.startSearching();
        }
    };

    changeSearchType = (newType) => {
        this.setState({
            searchTypes: {
                list: this.state.searchTypes.list, 
                active: newType 
            }
        });
    };

    cloneSearchInput = (el) => {
        this.setState({currentInputValue: el.target.value});
    };

    render() {
        const { searchMode } = this.props;

        if (searchMode) {
            return  (
                <div className={'header-search'}>
                    <Title content='Find your movie' ttlWhite ttlUC />
                    <Input 
                        onStartTyping={ this.cloneSearchInput }
                        value={ this.state.currentInputValue }
                        onKeyEnterPressed={ this.enterKeyPressedOnInput } 
                    />
                    <div className={'search-components'}>
                        <TypeSection 
                            searchTypes={ this.state.searchTypes }
                            searchTypeClick={ this.changeSearchType }
                        />
                        <ButtonSection 
                            parentFormId={ 'search-form' }
                            searchButtonClick={ this.startSearching }
                        />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
};

const mapStateToProps = store => ({
    searchMode: store.mode.search
});

const mapDispatchToProps = dispatch => ({
    onSearch(phrase, type) {
        dispatch(startSearch(phrase, type))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);