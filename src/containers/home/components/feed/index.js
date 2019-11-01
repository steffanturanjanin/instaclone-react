import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { getFeedRequestAction } from "../../actions/feed_actions";

class Feed extends Component {

    componentDidMount() {
        this.props.getFeedRequestAction();
    }

    render() {
        if (this.props.feed.get_feed_successful) {
            return (
                /*<div className='gallery-container'>
                    <div className='gallery'>
                        {this.props.feed.photos.map((photo, index) => {
                            return (
                                <div className='gallery-item' tabIndex='0' key={index}>
                                    <img className='gallery-image' src={`data:image/jpeg;base64,${photo.content}`} alt='' />

                                    <div className="gallery-item-info">

                                        <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span>
                                                <i className="fa fa-heart" aria-hidden="true"/> 66
                                            </li>
                                            <li className="gallery-item-comments"><span
                                                className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"/> 2
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>*/
                <section className="post-list">
                    {this.props.feed.photos.map((photo, index) => {
                        return (
                            <a href="" className="post" key={index}>
                                <figure className="post-image">
                                    <img src={`data:image/jpeg;base64,${photo.content}`} alt=""/>
                                </figure>
                                <div className="post-overlay">
                                    <p>
                                        <span className="post-likes"><i className="fa fa-heart" aria-hidden="true"/> 150</span>
                                        <span className="post-comments"><i className="fa fa-comment" aria-hidden="true"/> 10</span>
                                    </p>
                                </div>
                            </a>
                        )
                    })}
                </section>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = state => ({
    feed: state.feedReducer
});


const connected = connect(mapStateToProps, { getFeedRequestAction })(Feed);

export default connected;