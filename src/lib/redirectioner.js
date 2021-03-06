import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Redirectioner = (props) => {
    return (
        <Redirect to={props.location.state.path}/>
    );
};

Redirectioner.propTypes = {
    path: PropTypes.string,
};

export default Redirectioner;
