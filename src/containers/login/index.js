import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../../global/containers/header/index';


import Form from './components/form/index';

import {loginRequestAction} from './actions';
import {loginErrorAction} from './actions';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func,
        loginRequestAction: PropTypes.func,
        loginErrorAction: PropTypes.func,
        login: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.object
        }),
        token: PropTypes.shape({
            access_token: PropTypes.string,
            token_type: PropTypes.string,
            expires_at: PropTypes.string,
        }),
    };

    submit = (values) => {
        let error = {};
        if (!values.hasOwnProperty('email')) {
            error['email'] = 'You have not entered email';
        }
        if (!values.hasOwnProperty('password')) {
            error['password'] = 'You have not entered password';
        }
        if (Object.keys(error).length !== 0 || error.constructor !== Object) {
            console.log(error);
            this.props.loginErrorAction(error);
        } else {
            this.props.loginRequestAction(values);
        }
    };

    redirect = () => {
        if (this.props.token !== null) {
            console.log(this.props.token);
            return <Redirect push to='/'/>
        }
    };

    render() {
        const {
            handleSubmit,
            login: {
                requesting,
                successful,
                messages,
                errors,
            },
        } = this.props;

        if (this.props.token !== null) {
            return (
                <Redirect to={{pathname: '/redirect', state: {path: '/', token: this.props.token}}} />
            )
        }

        return (
            <Form handleSubmit={handleSubmit(this.submit)} login={this.props.login}/>
        );

    }
}

const mapStateToProps = state => ({
    login: state.loginReducer,
    token: state.authReducer.token,
});

const connected = connect(mapStateToProps, { loginRequestAction, loginErrorAction })(Login);

const formed = reduxForm({
   form: 'login',
})(connected);

export default formed;