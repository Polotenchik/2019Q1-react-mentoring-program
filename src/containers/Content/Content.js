import React from 'react';
import { connect } from "react-redux";
import { openMovie } from '../../actions';
import { MovieItem, Summary } from '../index';
import { NoResultsBlock } from '../../components';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

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
        this.movieList = mode.movie ? [...recommendedList] : [... searchList]; 
        this.movieList = this.sortResult(this.movieList, sortBy.chosenParameter);
        
        if (mode.loadingData && mode.film) {
            return (
                <div>Loading...</div>
            );
        }

        if (!!this.movieList && this.movieList.length > 0) {
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

const mapStateToProps = store => ({
    searchAttributes: store.search,
    searchList: store.movies.searchList,
    recommendedList: store.movies.recommendedList,
    movieGenre: store.movies.currentMovieGenre,
    mode: store.mode,
    sortBy: store.movies.sortBy
});

const mapDispatchToProps = dispatch => ({
    onOpenMovie(movie) {
        dispatch(openMovie(movie))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Content);