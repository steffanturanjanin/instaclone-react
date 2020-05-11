import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import FeedItem from './feed-item/index';
import ShowPhotoModal from './show-photo-modal/index';

import { getFeedRequestAction } from "../../actions/feed_actions";
import { closeModal, currentPhoto, nextPhoto, previousPhoto } from "../../actions/feed_actions";
import {
    setPhoto,
    getPhotoInfoRequestAction,
    getLikesRequestAction,
    postCommentRequestAction,
    postLikeRequestAction, postUnlikeRequestAction,
    closeLikesModalAction } from "../../actions/photo_actions";


class Feed extends Component {

    showInModal = (photo) => {
        this.props.currentPhoto(photo);
        this.props.setPhoto(photo);
        this.props.getPhotoInfoRequestAction(photo.id, photo.user_id);
    };

    componentDidMount() {
        this.props.getFeedRequestAction();
    }

    render() {
        if (this.props.feed.get_feed_api.successful) {
            return (
                <>
                    <section className="post-list">
                        {this.props.feed.photos.map((photo, index) => {
                            return (
                                <FeedItem
                                    key={index}
                                    photo={photo}
                                    showInModal={this.showInModal}
                                />
                            )
                        })}
                    </section>
                    <ShowPhotoModal
                        feed={this.props.feed}
                        photo={this.props.photo}
                        authUser={this.props.auth}
                        onHide={this.props.closeModal}
                        getPhotoInfoRequestAction={this.props.getPhotoInfoRequestAction}
                        previousPhoto={this.props.previousPhoto}
                        nextPhoto={this.props.nextPhoto}
                        setPhoto={this.props.setPhoto}
                        closeLikesModalAction={this.props.closeLikesModalAction}
                        getLikesRequestAction={this.props.getLikesRequestAction}
                        postCommentRequestAction={this.props.postCommentRequestAction}
                        postLikeRequestAction={this.props.postLikeRequestAction}
                        postUnlikeRequestAction={this.props.postUnlikeRequestAction}
                    />
                </>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
    feed: state.feedReducer,
    photo: state.photoReducer
});

const mapDispatchToProps = {
    getFeedRequestAction,
    closeModal,
    currentPhoto,
    nextPhoto,
    previousPhoto,
    setPhoto,
    getPhotoInfoRequestAction,
    closeLikesModalAction,
    getLikesRequestAction,
    postCommentRequestAction,
    postLikeRequestAction,
    postUnlikeRequestAction,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default connected;
