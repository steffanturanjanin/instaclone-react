import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { checkAuthorization } from "./lib/check-auth";
import { store } from "./index";
import './App.css';

import { connect } from "react-redux";

import { Signup } from './containers/signup/index';
import Login from './containers/login/index';
import Home from './containers/home/index';
import Redirectioner from './lib/redirectioner';
import { logoutRequestAction } from "./services/auth-service/actions";

import Header from './global/containers/header/index';

class App extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        checkAuthorization(store);
    }

   logout = () => {
        this.props.logoutRequestAction();
    };

    render() {
        return (
            <div>
                <Header token={this.props.token} logout={this.logout}/>
                <div >
                    <Switch>
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/redirect' component={Redirectioner}/>
                        <Route exact path='/' component={this.props.token ? Home : Login}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
    }
};

const connected = connect(mapStateToProps, {logoutRequestAction})(App);

export default connected;
