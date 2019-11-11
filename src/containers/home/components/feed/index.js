import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import FeedItem from './feed-item/index';
import ShowPhotoModal from './show-photo-modal/index';

import { getFeedRequestAction } from "../../actions/feed_actions";
import { closeModal, currentPhoto, nextPhoto, previousPhoto } from "../../actions/feed_actions";
import { setPhoto, getPhotoInfoRequestAction, getLikesRequestAction, postCommentRequestAction, closeLikesModalAction } from "../../actions/photo_actions";


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
                        show={this.props.feed.modal.show}
                        onHide={this.props.closeModal}
                        photo={this.props.photo.photo}
                        comments={this.props.photo.comments}
                        user={this.props.photo.user}
                        status={this.props.photo.get_photo_info_api}
                        getPhotoInfoRequestAction={this.props.getPhotoInfoRequestAction}
                        previousPhoto={this.props.previousPhoto}
                        nextPhoto={this.props.nextPhoto}
                        modal={this.props.feed.modal}
                        setPhoto={this.props.setPhoto}
                        likesModal={this.props.photo.likes_modal}
                        likesStatus={this.props.photo.get_likes_api}
                        closeLikesModalAction={this.props.closeLikesModalAction}
                        getLikesRequestAction={this.props.getLikesRequestAction}
                        postCommentRequestAction={this.props.postCommentRequestAction}
                        authUser={this.props.auth.user}
                        commentStatus={this.props.photo.post_comment_api}
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


const connected = connect(mapStateToProps,
    { getFeedRequestAction,
        closeModal,
        currentPhoto,
        nextPhoto,
        previousPhoto,
        setPhoto,
        getPhotoInfoRequestAction,
        closeLikesModalAction,
        getLikesRequestAction,
        postCommentRequestAction
    })(Feed);

export default connected;