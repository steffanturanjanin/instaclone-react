import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {unregister} from './services/interceptors/token.interceptor';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import IndexReducer from './index-reducer';
import IndexSaga from './index-saga';

const sagaMiddleware = createSagaMiddleware();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
);

const browserHistory = createBrowserHistory();

sagaMiddleware.run(IndexSaga);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();

