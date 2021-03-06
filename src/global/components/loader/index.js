import React from 'react'
import './style.css'

const Loader = (props) => {

    return (
        <div className="loader-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader