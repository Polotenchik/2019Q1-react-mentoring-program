import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { NoResultsBlock } from '../../components';
import { Footer } from '../../components';

export const Body = () => (
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
