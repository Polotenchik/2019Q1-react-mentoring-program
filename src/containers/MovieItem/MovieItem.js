import React from 'react';
import { MovieItemPoster } from './MovieItemPoster';
import { MovieItemInfo } from './MovieItemInfo';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onPosterClick = () => {
        this.props.onPosterClick(this.props.info);
    };

    render() {
        const { info } = this.props;

        return (
            <div className='item'>
                <MovieItemPoster 
                    posterLink={ info['poster_path'] }
                    posterClick={ this.onPosterClick }
                />
                <MovieItemInfo 
                    movieTitle={ info['title'] } 
                    releaseDate={ info['release_date'] } 
                    genre={ info['genres'] } 
                />
            </div>
        );
    }
}