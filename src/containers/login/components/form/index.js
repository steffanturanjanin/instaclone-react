import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './style.css';

const Form = (props) => {
    const { handleSubmit } = props;
    const { login } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div id="wrapper">
                <div className="main-content">
                    <div className="header">
                        <img src="https://i.imgur.com/zqpwkLQ.png"/>
                    </div>
                    <div className="l-part">
                        <Field
                            name="email"
                            type="text"
                            id="email"
                            className={login.errors.hasOwnProperty('authentication') || login.errors.hasOwnProperty('email') ? 'auth-input-error' : 'input-1'}
                            component="input"
                            placeholder='email'
                        />
                        {!login.requesting && login.errors.hasOwnProperty('email') && (
                            <div className='auth-messages'>
                                <p> *{login.errors.email} </p>
                            </div>
                        )}
                        <div className="overlap-text">
                            <Field
                                name="password"
                                type="password"
                                id="password"
                                className={login.errors.hasOwnProperty('authentication') || login.errors.hasOwnProperty('password') ? 'auth-input-error' : 'input-1'}
                                component="input"
                                placeholder='password'
                            />
                            {!login.requesting && login.errors.hasOwnProperty('password') && (
                                <div className='auth-messages'>
                                    <p> *{login.errors.password} </p>
                                </div>
                            )}
                        </div>
                        <button action="submit" className='btn'>Log in</button>
                    </div>
                    {!login.requesting && login.errors.hasOwnProperty('authentication') && (
                        <div className='auth-messages'>
                            <h1> {login.errors.authentication} </h1>
                        </div>
                    )}
                </div>
                <div className="sub-content">
                    <div className="s-part">
                        Don't have an account? <a href="/signup"> Sign up </a>
                    </div>
                </div>
            </div>
        </form>
    )
};

Form.propTypes = {
    handleSubmit: PropTypes.func,
    login: PropTypes.shape({
        requesting: PropTypes.bool,
        successful: PropTypes.bool,
        messages: PropTypes.array,
        errors: PropTypes.object,
    }),
};

export default Form;