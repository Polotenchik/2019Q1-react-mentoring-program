import ReactDOM from 'react-dom';
import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundaryContainer from './containers/ErorrBoundary/ErrorBoundaryContainer';
import { Body } from './containers';
import { Whooops404 } from './components';
import store from './redux/store/store';

ReactDOM.render(
    <Router>
        <Provider store={ store }>
            <ErrorBoundaryContainer>
                <Switch>
                    <Route exact path="/" component={ Body }/>
                    <Route exact path="/search" component={ Body }/>
                    <Route exact path="/film/:id" component={ Body }/>
                    <Route path="*" component={ Whooops404 } />
                </Switch>
            </ErrorBoundaryContainer>
        </Provider>
    </Router>,
    document.getElementById('greeting'),
);
