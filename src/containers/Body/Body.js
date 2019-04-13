import React from 'react';
import { Header, Content } from '../index';
import { Footer } from '../../components';

export const Body = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Content/>
            </div>
            <Footer />
        </>
    );
}