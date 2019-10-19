import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from "./serviceWorker";


import App from './App';

import IndexReducer from './index-reducer';
import IndexSaga from './index-saga';

const sagaMiddleware = createSagaMiddleware();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
);

const browserHistory = createBrowserHistory();

sagaMiddleware.run(IndexSaga);


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();

