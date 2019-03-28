import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from '../components/Footer';

export const Body = (props) => {
    return (
        <>
            <div className="wrapper">
                <Header 
                    headerType={ props.headerType } 
                    id={ props.movie }
                />
                <Content 
                    headerType={ props.headerType } 
                    movies={  props.movies }
                    handler = { props.getMovieId } 
                />
            </div>
            <Footer />
        </>
    );
}