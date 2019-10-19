import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './style.css';

const Form = (props) => {
    const { handleSubmit } = props;
    const { signup } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div id="wrapper">
                <div className="main-content">
                    <div className="header">
                        <img src="https://i.imgur.com/zqpwkLQ.png"/>
                    </div>
                    <div className="l-part">
                        <Field
                            name="username"
                            type="text"
                            id="username"
                            className={signup.errors.hasOwnProperty('username') ? 'auth-input-error' : 'input-1'}
                            component="input"
                            placeholder='username'
                        />
                        {!signup.requesting && signup.errors.hasOwnProperty('username') && (
                            <div className='auth-messages'>
                                <p> *{signup.errors.username} </p>
                            </div>
                        )}
                        <Field
                            name="email"
                            type="text"
                            id="email"
                            className={signup.errors.hasOwnProperty('email') ? 'auth-input-error' : 'input-1'}
                            component="input"
                            placeholder='email'
                        />
                        {!signup.requesting && signup.errors.hasOwnProperty('email') && (
                            <div className='auth-messages'>
                                <p> *{signup.errors.email} </p>
                            </div>
                        )}
                        <div className="overlap-text">
                            <Field
                                name="password"
                                type="password"
                                id="password"
                                className={signup.errors.hasOwnProperty('password') ? 'auth-input-error' : 'input-1'}
                                component="input"
                                placeholder='password'
                            />
                            {!signup.requesting && signup.errors.hasOwnProperty('password') && (
                                <div className='auth-messages'>
                                    <p> *{signup.errors.password} </p>
                                </div>
                            )}
                            <Field
                                name="password_confirmation"
                                type="password"
                                id="password_confirmation"
                                className={signup.errors.hasOwnProperty('password') ? 'auth-input-error' : 'input-1'}
                                component="input"
                                placeholder='confirm password'
                            />
                        </div>
                        <button action="submit" className='btn'>Sign up</button>
                    </div>
                </div>
                <div className="sub-content">
                    <div className="s-part">
                        Already have an account? <a href="#"> Log in </a>
                    </div>
                </div>
            </div>



        </form>
    )
};

Form.propTypes = {
    handleSubmit: PropTypes.func,
    signup: PropTypes.shape({
        requesting: PropTypes.bool,
        successful: PropTypes.bool,
        messages: PropTypes.array,
        errors: PropTypes.object,
    }),
};

export default Form;