import React from 'react';
import PropTypes from 'prop-types';
import { TopBarSection } from '../../components';
import Search from '../Search/Search';
import MovieDescription from '../MovieDescription/MovieDescription';

export class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.onFetchMovieById(this.props.match.params.id);
    }
  }

  render() {
    return (
            <header className='header' style={{ background: "#000 url('img/netflix-bg.jpg')" }}>
                <div className='header-container'>
                    <TopBarSection searchButtonClick={ this.props.onOpenSearch } movieMode={ this.props.movieMode }/>
                    <Search />
                    <MovieDescription />
                </div>
            </header>
    );
  }
}

HeaderView.defaultProps = {
  filmMode: false,
  currentFilm: {},
};
