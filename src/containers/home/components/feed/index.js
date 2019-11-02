import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import FeedItem from './feed-item/index';
import ShowPhotoModal from './show-photo-modal/index';

import { getFeedRequestAction } from "../../actions/feed_actions";
import { closeModal, currentPhoto, nextPhoto, previousPhoto } from "../../actions/feed_actions";


class Feed extends Component {


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
                                    showModal={this.props.currentPhoto}
                                />
                            )
                        })}
                    </section>
                    <ShowPhotoModal
                        show={this.props.feed.modal.show}
                        onHide={this.props.closeModal}
                        photo={this.props.feed.modal.current_photo}
                        previousPhoto={this.props.previousPhoto}
                        nextPhoto={this.props.nextPhoto}
                        modal={this.props.feed.modal}
                    />

                </>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = state => ({
    feed: state.feedReducer
});


const connected = connect(mapStateToProps, { getFeedRequestAction, closeModal, currentPhoto, nextPhoto, previousPhoto })(Feed);

export default connected;