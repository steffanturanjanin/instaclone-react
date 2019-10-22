import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {checkAuthorization, checkIndexAuthorization, checkProtectedRouteAuthorization} from "./lib/check-auth";
import { store } from "./index";
import './App.css';

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Signup } from './containers/signup/index';
import Login from './containers/login/index';
import Home from './containers/home/index';
import Redirectioner from './lib/redirectioner';
import {loginErrorAction, loginRequestAction} from "./containers/login/actions";

class App extends Component{

    componentDidMount() {
        checkAuthorization(store);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/redirect' component={Redirectioner}/>
                <Route exact path='/' component={this.props.token ? Home : Login}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
    }
};

const connected = connect(mapStateToProps, {})(App);

export default connected;
