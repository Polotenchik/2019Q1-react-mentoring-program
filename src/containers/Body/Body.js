import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { NoResultsBlock, Footer } from '../../components';

const Body = () => (
    <>
        <div className="wrapper">
            <Header/>
            <Switch>
                <Route exact path='/' component={ NoResultsBlock } />
                <Route path='/search' component={ Content } />
            </Switch>
        </div>
        <Footer />
    </>
);

export default Body;
