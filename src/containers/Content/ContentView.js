import React from 'react';
import { Link } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import Summary from '../Summary/Summary';
import { NoResultsBlock } from '../../components';

export default class ContentView extends React.Component {
    // TODO: move to helpers
    sortResult = (res, parameter) => {
      function sortFuncRating(a, b) {
        return +b[parameter] - +a[parameter];
      }

      function sortFuncDates(a, b) {
        return Date.parse(b[parameter]) - Date.parse(a[parameter]);
      }

      const sortParametersMatching = {
        'release date': 'release_date',
        rating: 'vote_average',
      };

      const param = sortParametersMatching[parameter];

      switch (param) {
        case 'release_date': {
          return res.sort(sortFuncDates);
        }
        case 'vote_average': {
          return res.sort(sortFuncRating);
        }
        default:
      }

      return null;
    };

    chooseMovieByClick = (movie) => {
      this.props.onOpenMovie(movie);
    };

    render() {
      const {
        searchList, recommendedList, mode, sortBy,
      } = this.props;
      this.movieList = mode.movie ? [...recommendedList] : [...searchList];
      this.movieList = this.sortResult(this.movieList, sortBy.chosenParameter);

      if (mode.loadingData && mode.film) {
        return (
                <div>Loading...</div>
        );
      }

      if (this.movieList.length) {
        return (
                <>
                    <Summary />
                    <div className='results'>
                        { this.movieList.map(item => (
                            <Link to={`/film/${item.id}`} key={ item.id.toString() }>
                                <MovieItem
                                    key={ item.id.toString() }
                                    info={ item }
                                    onPosterClick={ this.chooseMovieByClick }
                                />
                            </Link>
                        ))}
                    </div>
                </>
        );
      }
      return (<NoResultsBlock />);
    }
}

ContentView.defaultProps = {
  searchList: [],
  recommendedList: [],
  onOpenMovie: f => f,
  onChangeItem: f => f,
  mode: {
    movie: false,
    search: true,
    loadingData: false,
  },
  searchAttributes: {
    phrase: '',
    type: 'title',
  },
  movieGenre: 'Action',
};
