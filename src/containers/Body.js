
import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from '../components/Footer';


export const Body = () => (
    <>
        <div className="wrapper">
            <Header />
            <Content />
        </div>
        <Footer />
    </>
);