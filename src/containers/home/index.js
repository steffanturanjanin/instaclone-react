import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

import UploadPhotoModal from './components/upload-photo-modal/index';
import Feed from './components/feed/index';

import { uploadPhotoRequestAction } from "./actions/upload_photo_action";
import { getFeedRequestAction } from "./actions/feed_actions";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        uploadPhotoRequestAction: PropTypes.func,
        getFeedRequestAction: PropTypes.func,
        feed: PropTypes.shape({
            photos: PropTypes.array,
            get_feed_api: PropTypes.object,
        }),
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
                    uploadPhoto = {this.props.uploadPhoto}
                />
                <Feed/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
    feed: state.feedReducer,
    uploadPhoto: state.uploadPhotoReducer,
});


const mapDispatchToProps = dispatch => {
    return {
        uploadPhotoRequestAction: () => dispatch(uploadPhotoRequestAction)
    }
};

const connected = connect(mapStateToProps, { uploadPhotoRequestAction, getFeedRequestAction })(Home);

export default connected;
