import React, {Component} from 'react';
import { MovieItemPoster } from './MovieItemPoster';
import { MovieItemInfo } from './MovieItemInfo';

export class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info, handler } = this.props;

        return (
            <div className='item'>
                <MovieItemPoster 
                    posterLink={ info['poster_path'] }
                    id={ info['id'] } 
                    handler={ handler } 
                />
                <MovieItemInfo 
                    filmTitle={ info['title'] } 
                    releaseDate={ info['release_date'] } 
                    genre={ info['genres'] } 
                />
            </div>
        );
    }
}