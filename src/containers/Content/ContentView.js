import React from 'react';
import { MovieItem } from '../index';
import Summary from '../Summary/Summary'
import { NoResultsBlock } from '../../components';

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
                            <MovieItem 
                                key={ item['id'] }
                                info={ item }
                                onPosterClick={ this.chooseMovieByClick }
                            />
                        ))}
                    </div>
                </>
            );
        } else {
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
