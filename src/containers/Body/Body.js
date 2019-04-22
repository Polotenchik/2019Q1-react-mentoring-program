import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { NoResultsBlock, Whooops404 } from '../../components';
import { Footer } from '../../components';

export const Body = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Switch>
                    <Route exact path='/' component= { NoResultsBlock } />
                    <Route path='/film/:id' component={ Content } />
                    <Route component={ Whooops404 } />
                </Switch>
            </div>
            <Footer />
        </>
    );
}