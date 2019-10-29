import React from 'react';
import './style.css';

const UploadPhotoButton = (props) => {
    const { handleOnClick } = props;
    return (
        <div className='upload-button-container'>
            <i className='fa fa-camera upload-button' onClick={handleOnClick}> </i>
        </div>
    );
};

export default UploadPhotoButton;