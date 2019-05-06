import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import { Whooops404 } from './components';

const Root = ({ Router, location, context, store }) => (
    <Provider store={ store }>
        <Router location={ location } context={ context }>
            <ErrorBoundaryContainer>
                <Switch>
                    <Route exact path="/" component={ Body }/>
                    <Route exact path="/search" component={ Body }/>
                    <Route exact path="/film/:id"  component={ Body }/>
                    <Route path="*" component={ Whooops404 } />
                </Switch>
            </ErrorBoundaryContainer>
        </Router>
    </Provider>
);

export default hot(module)(Root);