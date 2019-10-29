import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

import UploadPhotoModal from './components/upload-photo-modal/index';

import { uploadPhotoRequestAction } from "./actions/upload_photo_action";

class Home extends Component {

    static propTypes = {
        uploadPhotoRequestAction: PropTypes.func,
        uploadPhoto: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.object
        })
    };

    handleUploadPhotoSubmit = (request) => {
        this.props.uploadPhotoRequestAction(request);
    };

    render() {
        console.log(this.props);
        return (
            <div className='home-container'>
                <UploadPhotoModal
                    handleUploadPhotoSubmit = {this.handleUploadPhotoSubmit}
                    user = {this.props.auth.user}
                    uploadPhoto={this.props.uploadPhoto}
                />
            </div>
        );

    }
}

const mapStateToProps = state => ({
    uploadPhoto: state.uploadPhotoReducer,
    auth: state.authReducer,
});

const mapDispatchToProps = dispatch => {
    return {
        uploadPhotoRequestAction: () => dispatch(uploadPhotoRequestAction)
    }
};

const connected = connect(mapStateToProps, { uploadPhotoRequestAction })(Home);

export default connected;
