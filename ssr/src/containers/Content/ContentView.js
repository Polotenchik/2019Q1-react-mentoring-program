import React from 'react';
import { MovieItem } from '../index';
import Summary from '../Summary/Summary'
import { NoResultsBlock } from '../../components';
import { Link } from 'react-router-dom';

export default class ContentView extends React.Component {
    constructor(props) {
        super(props);
    }

    //TODO: move to helpers
    sortResult = (res, parameter) => {
        const sortParametersMatching = {
          'release date': 'release_date',
          'rating': 'vote_average'
        };
        parameter = sortParametersMatching[parameter];
    
        switch (parameter) {
          case 'release_date' : {
            return res.sort(sortFuncDates);
          }
          case 'vote_average': {
            return res.sort(sortFuncRating);
          }
        }

        function sortFuncRating(a, b) {
            return +b[parameter] - +a[parameter]
          }
 
        function sortFuncDates(a, b) {
            return Date.parse(b[parameter]) - Date.parse(a[parameter]);
        }
    };

    chooseMovieByClick = (movie) => {
        this.props.onOpenMovie(movie);
    };

    render() {
        const { searchList, recommendedList, mode, sortBy, searchAttributes, movieGenre } = this.props;
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
                        { this.movieList.map((item) => (
                            <Link to={`/film/${item['id']}`}  key={ item['id'].toString() }> 
                                <MovieItem 
                                    key={ item['id'].toString() }
                                    info={ item }
                                    onPosterClick={ this.chooseMovieByClick }
                                />
                            </Link>
                        ))}
                    </div>
                </>
            );
        } else {
            if (!!this.props.match.params.id) {
                return null;
            }
            return (<NoResultsBlock />);
        }

    }
};

ContentView.defaultProps = {
    searchList: [],
    recommendedList: [],
    onOpenMovie: f=>f,
    onChangeItem: f=>f,
    mode: {
      movie: false,
      search: true,
      loadingData: false
    },
    searchAttributes: {
      phrase: '',
      type: 'title'
    },
    movieGenre: 'Action'
  };
