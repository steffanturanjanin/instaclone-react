import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Form from './components/form/index';

import loginRequestAction from './actions';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func,
        loginRequestAction: PropTypes.func,
        login: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.object
        })
    };

    submit = (values) => {
        this.props.loginRequestAction(values);
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

        return (
            <Form handleSubmit={handleSubmit(this.submit)} login={this.props.login}/>
        );
    }

}

const mapStateToProps = state => ({
    login: state.loginReducer,
});

const connected = connect(mapStateToProps, { loginRequestAction })(Login);

const formed = reduxForm({
   form: 'login',
})(connected);

export default formed;