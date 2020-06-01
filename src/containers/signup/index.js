import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from "redux-form";
import { Redirect } from 'react-router';
import { signupRequestAction, signupErrorAction } from './actions';

import Form from './components/form/index';

import './style.css';

class Signup extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func,
        signupRequestAction: PropTypes.func,
        signupErrorAction: PropTypes.func,
        signup: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.object,
        }),
        token: PropTypes.shape({
            access_token: PropTypes.string,
            token_type: PropTypes.string,
            expires_at: PropTypes.string,
        }),
    };

    submit = (values) => {
        let error = {};
        if (!values.hasOwnProperty('username')) {
            error['username'] = 'username is required';
        }
        if (!values.hasOwnProperty('email')) {
            error['email'] = 'email is required';
        }
        if (!values.hasOwnProperty('password')) {
            error['password'] = 'password is required';
        }
        if (!values.hasOwnProperty('password_confirmation')) {
            error['password_confirmation'] = 'password confirmation is required';
        }
        if (Object.keys(error).length !== 0 || error.constructor !== Object) {
            console.log(error);
            this.props.signupErrorAction(error);
        } else {
            this.props.signupRequestAction(values);
        }

    };

    render() {
        const {
            handleSubmit,
            signup: {
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

        return(
            <Form
                handleSubmit={handleSubmit(this.submit)}
                signup={this.props.signup}/>
        );
    }
}

const mapStateToProps = state => ({
   signup: state.signupReducer,
    token: state.authReducer.token,
});

const mapDispatchToProps = {
    signupRequestAction,
    signupErrorAction
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Signup);

const formed = reduxForm({
   form: 'signup,'
})(connected);

export { formed as Signup };
