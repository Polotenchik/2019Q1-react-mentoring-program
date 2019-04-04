import React from 'react';
import { Header, Content,  } from '../index';
import { Footer } from '../../components';

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