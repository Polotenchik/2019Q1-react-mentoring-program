import React from 'react';
import { Body } from './containers';
import { getMoives } from './data';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 338970
        }; 
        this.getMovie = this.getMovie.bind(this);
    }
    
    getMovie(id) {
        this.setState({
            id : id
        });
     }

    render() {
        const data = getMoives();

        return (
            <>
                <Body 
                    headerType='search' 
                />
                <Body 
                    headerType='search' 
                    movies={ data } 
                    getMovieId={ this.getMovie } 
                />
                <Body 
                    headerType='info' 
                    movies={ data }
                    getMovieId={ this.getMovie } 
                    movie={ this.state.id } 
                />
            </>
        );
    }
}