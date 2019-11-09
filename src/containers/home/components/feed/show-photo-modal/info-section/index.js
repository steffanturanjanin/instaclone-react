import React from 'react';
import './style.css'

const InfoSection = (props) => {

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

                <div className='col-12' style={{marginBottom:'20px', marginTop:'20px'}}>
                    <i className='fa fa-heart' style={{fontSize:'25px', marginBottom:'10px', float:'left'}}/>
                    <p style={{fontSize:'12px', fontWeight: '600', marginLeft:'10px', float:'left'}}>8494 likes</p>
                    <p style={{fontSize:'12px', fontWeight:'100', color:'#937d85', float:'right'}}> 4 days ago</p>
                    <div style={{marginBottom:'15px', marginTop:'20px'}}>
                        <textarea className='form-control' style={{  width:'70%', height:'50px', marginBottom:'15px', fontSize:'12px'}}/>
                        <a style={{ marginLeft:'10px', position:'absolute', right:'0', top:'50%', marginRight:'30px', fontWeight:'600'}}>Post</a>
                    </div>
                </div>

            </div>



        </div>
    )
};

export default InfoSection