import React, {Component} from 'react';
import './style.css';

import Loader from '../../../../../../global/components/loader/index';

import {timestamp} from '../../../../../../services/time/index';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.like = this.like.bind(this);
    }

    showLikesModalAction = () => {
        this.props.getLikesRequestAction(this.props.photo.photo.id);
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    like = () => {
        if (this.props.photo.like) {
            this.props.postUnlikeRequestAction(this.props.photo.photo.id);
        } else {
            this.props.postLikeRequestAction(this.props.photo.photo.id);
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.postCommentRequestAction(this.props.photo.photo.id, this.state.comment);
        this.setState({comment: ''});
    };

    render() {
        return (
            <div className='row info-section-container'>
                <div className='col-12 info-section-header'>
                    <img className='info-section-header-user-avatar'
                         src={this.props.photo.user.profile_picture === null ?  'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'
                             : `data:image/jpeg;base64,${this.props.photo.user.profile_picture}`} alt=''/>

                    <p className='info-section-header-username'>{this.props.photo.user.username}</p>
                </div>
                <div className='info-section-comment-section'>
                    <div className='col-12 info-section-comment-container'>

                        <div className='info-section-comment-avatar-container'>
                            <img className='info-section-comment-avatar'
                                 src={this.props.photo.user.profile_picture === null ? 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'
                                     : `data:image/jpeg;base64,${this.props.photo.user.profile_picture}`} alt=''>
                            </img>
                        </div>

                        <div className='info-section-comment-content-container'>
                            <p className='info-section-comment-username'>{this.props.photo.user.username}</p>

                            {this.props.photo.photo.description !== 'null' && (
                                <p className='info-section-comment-content'>{this.props.photo.photo.description}</p>
                            )}

                        </div>
                    </div>
                    { this.props.photo.comments.length > 0 && this.props.photo.comments.map((comment, index) => {
                        return (
                            <div className='col-12 info-section-comment-container' key={index}>

                                <div className='info-section-comment-avatar-container'>
                                    <img className='info-section-comment-avatar'
                                         src={comment.user.profile_picture === null ? 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'
                                             : `data:image/jpeg;base64,${comment.user.profile_picture}`} alt=''>
                                    </img>
                                </div>

                                <div className='info-section-comment-content-container'>
                                    <p className='info-section-comment-username'>{comment.user.username}</p>

                                    <p className='info-section-comment-content'>{comment.content}</p>
                                    <p className='info-section-comment-timestamp'> {timestamp(comment.created_at)} ago</p>
                                </div>
                            </div>
                        )})
                    }

                    <div className='col-12 comment-like-container'>
                        <i className={this.props.photo.like ? 'fa fa-heart like-icon' : 'fa fa-heart-o unlike-icon'} onClick={this.like}/>
                        <p className='likes' onClick={this.showLikesModalAction}>{this.props.photo.photo.likes}</p>
                        <p className='post-date'> {timestamp(this.props.photo.photo.created_at)} ago</p>
                    </div>

                    <div className='col-12 comment-area-container'>
                        <form className='post-comment-area' onSubmit={this.onSubmit}>

                            {this.props.photo.post_comment_api.requesting ? (
                                    <Loader/>
                                )
                                :
                                (
                                    <textarea className='form-control post-comment-textarea' name='comment' onChange={this.onChange} value={this.state.comment}/>
                                )
                            }

                            <button type='submit' className='btn-primary post-comment-button'>Post</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default InfoSection
