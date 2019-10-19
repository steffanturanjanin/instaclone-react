import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import Link from 'react-router';
import signupRequestAction from './actions';

import Form from './components/form/index';

import './style.css';


class Signup extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func,
        signupRequestAction: PropTypes.func,
        signup: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.object,
        })
    };

    submit = (values) => {
      this.props.signupRequestAction(values);
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


        return(
            <Form
                handleSubmit={handleSubmit(this.submit)}
                signup={this.props.signup}/>
        );

    }
}

const mapStateToProps = state => ({
   signup: state.signupReducer,
});

const connected = connect(mapStateToProps, { signupRequestAction })(Signup);

const formed = reduxForm({
   form: 'signup,'
})(connected);

export { formed as Signup };
