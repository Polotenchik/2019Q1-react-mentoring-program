import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';
import { Whooops404, Footer, NoResultsBlock } from './components';

const Root = ({ Router, location, context, store }) => (
    <Provider store={ store }>
        <Router location={ location } context={ context }>
            <ErrorBoundaryContainer>
                <Switch>
                    <Route path="/whooops" component={ Whooops404 } />
                    <Route path="/">
                        <div className="wrapper">
                            <Switch>
                                <Route path='/film/:id' component={ Header } />
                                <Route exact path='/' component={ Header } />
                                <Route path='/search' component={ Header } />
                                <Redirect to='/whooops' />
                            </Switch>
                            <Switch>
                                <Route path='/film/:id' component={ Content } />
                                <Route exact path='/' component={ NoResultsBlock } />
                                <Route path='/search' component={ Content } />
                                <Redirect to='/whooops' />
                            </Switch>
                        </div>
                        <Footer />
                    </Route>
                </Switch>
            </ErrorBoundaryContainer>
        </Router>
    </Provider>
);

export default hot(module)(Root);

{/* <Route exact path="/" component={ Body }/>
<Route exact path="/search" component={ Body }/>
<Route exact path="/film/:id"  component={ Body }/>
*/}