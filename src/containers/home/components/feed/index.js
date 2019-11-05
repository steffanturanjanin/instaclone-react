import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import FeedItem from './feed-item/index';
import ShowPhotoModal from './show-photo-modal/index';

import { getFeedRequestAction } from "../../actions/feed_actions";
import { closeModal, currentPhoto, nextPhoto, previousPhoto } from "../../actions/feed_actions";
import { setPhoto } from "../../actions/photo_actions";


class Feed extends Component {


    showInModal = (photo) => {
        this.props.currentPhoto(photo);
        this.props.setPhoto(photo);
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
                        previousPhoto={this.props.previousPhoto}
                        nextPhoto={this.props.nextPhoto}
                        modal={this.props.feed.modal}
                        setPhoto={this.props.setPhoto}
                    />

                </>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = state => ({
    feed: state.feedReducer,
    photo: state.photoReducer
});


const connected = connect(mapStateToProps, { getFeedRequestAction, closeModal, currentPhoto, nextPhoto, previousPhoto, setPhoto })(Feed);

export default connected;