import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from '../components/Footer';


export const Body = (props) => {
    return (
        <>
            <div className="wrapper">
                <Header headerType={ props.headerType } />
                <Content contentType={ props.contentType } headerType={ props.headerType } />
            </div>
            <Footer />
        </>
    );
}