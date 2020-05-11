import React from 'react';
import { Modal } from "react-bootstrap";
import './style.css';

import InfoSection from './info-section/index';
import LikesModal from '../show-photo-modal/likes-modal/index';
import Loader from '../../../../../global/components/loader/index';

const ShowPhotoModal = (props) => {

    function nextPhoto ()  {
        props.nextPhoto(props.photo.photo);
        props.setPhoto(props.feed.modal.next_photo);
        props.getPhotoInfoRequestAction(props.feed.modal.next_photo.id, props.feed.modal.next_photo.user_id);
    }

    function previousPhoto () {
        props.previousPhoto(props.photo.photo);
        props.setPhoto(props.feed.modal.previous_photo);
        props.getPhotoInfoRequestAction(props.feed.modal.previous_photo.id, props.feed.modal.previous_photo.user_id);
    }

    if (props.photo !== null) {
        return (
            <>
                <Modal
                    size='lg'
                    show={props.feed.modal.show}
                    onHide={props.onHide}
                    centered
                    dialogClassName="modal-90w"
                >

                    <div className="row modal-container" >
                        {props.feed.modal.previous_photo !== null && (
                            <span onClick={previousPhoto}><i className='fa fa-chevron-left slide-left'/></span>
                        )}

                        {!props.photo.get_photo_info_api.successful ? (
                            <div className='col-12' style={{height:'500px'}}>
                                <Loader />
                            </div>
                        ) : (
                            <>
                                <div className='col-7 modal-image-container'>
                                    <div className='modal-image-body'>
                                        <img src={`data:image/jpeg;base64,${props.photo.photo.content}`} alt='' className='modal-image'/>
                                    </div>
                                </div>
                                <div className='col-5 modal-info-section-container'>
                                    <InfoSection
                                        photo={props.photo}
                                        authUser={props.authUser}
                                        getLikesRequestAction={props.getLikesRequestAction}
                                        postCommentRequestAction={props.postCommentRequestAction}
                                        postLikeRequestAction={props.postLikeRequestAction}
                                        postUnlikeRequestAction={props.postUnlikeRequestAction}
                                    />
                                </div>
                                <LikesModal
                                    show={props.photo.likes_modal.show}
                                    onHide={props.closeLikesModalAction}
                                    likes={props.photo.likes_modal.likes}
                                    status={props.photo.get_likes_api}
                                />

                            </>
                        )}
                        {props.feed.modal.next_photo !== undefined && (
                            <span onClick={nextPhoto}><i className='fa fa-chevron-right slide-right'/></span>
                        )}
                    </div>
                </Modal>
            </>
        )
    } else {
        return null;
    }
};

export default ShowPhotoModal;
