import React from 'react';
import './style.css'

const InfoSection = (props) => {

    function showLikesModalAction () {

        props.getLikesRequestAction(props.id);
    }

    return (
        <div className='row info-section-container'>
            <div className='col-12 info-section-header'>
                <img className='info-section-header-user-avatar'
                     src={props.user.profile_picture === null ? 'https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                         : `data:image/jpeg;base64,${props.user.profile_picture}`} alt=''/>

                 <p className='info-section-header-username'>{props.user.username}</p>
            </div>
            <div className='info-section-comment-section'>
                <div className='col-12 info-section-comment-container'>

                    <div className='info-section-comment-avatar-container'>
                        <img className='info-section-comment-avatar'
                             src={props.user.profile_picture === null ? 'https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                                 : `data:image/jpeg;base64,${props.user.profile_picture}`} alt=''>
                        </img>
                    </div>

                    <div className='info-section-comment-content-container'>
                        <p className='info-section-comment-username'>{props.user.username}</p>

                        {props.description !== 'null' && (
                            <p className='info-section-comment-content'>{props.description}</p>
                        )}

                    </div>
                </div>
                {props.comments.length > 0 &&
                    props.comments.map((comment, index) => {
                        console.log(comment);
                        return (
                            <div className='col-12 info-section-comment-container' key={index}>

                                <div className='info-section-comment-avatar-container'>
                                    <img className='info-section-comment-avatar'
                                         src={comment.user.profile_picture === null ? 'https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                                             : `data:image/jpeg;base64,${comment.user.profile_picture}`} alt=''>
                                    </img>
                                </div>

                                <div className='info-section-comment-content-container'>
                                    <p className='info-section-comment-username'>{comment.user.username}</p>

                                    <p className='info-section-comment-content'>{comment.content}</p>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='col-12 comment-like-container'>
                    <i className='fa fa-heart like-icon'/>
                    <p className='likes' onClick={showLikesModalAction}>{props.likes_number}</p>
                    <p className='post-date'> 4 days ago</p>
                    <div className='post-comment-area'>
                        <textarea className='form-control post-comment-textarea'/>
                        <a className='post-comment-button'>Post</a>
                    </div>
                </div>

            </div>



        </div>
    )
};

export default InfoSection