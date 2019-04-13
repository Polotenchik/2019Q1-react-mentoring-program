import React from 'react';
import { Header } from '../index';
import Content from '../Content/Content';
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