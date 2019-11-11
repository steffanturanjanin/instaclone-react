import React from 'react';
import { Modal } from "react-bootstrap";
import './style.css';

import InfoSection from './info-section/index';
import LikesModal from '../show-photo-modal/likes-modal/index';
import Loader from '../../../../../global/components/loader/index';

const ShowPhotoModal = (props) => {


    function nextPhoto ()  {
        props.nextPhoto(props.photo);
        props.setPhoto(props.modal.next_photo);
        props.getPhotoInfoRequestAction(props.modal.next_photo.id, props.modal.next_photo.user_id);
    }

    function previousPhoto () {
        props.previousPhoto(props.photo);
        props.setPhoto(props.modal.previous_photo);
        props.getPhotoInfoRequestAction(props.modal.previous_photo.id, props.modal.previous_photo.user_id);
    }

    if (props.photo !== null) {
        return (
            <>
                <Modal
                    size='lg'
                    show={props.show}
                    onHide={props.onHide}
                    centered
                    dialogClassName="modal-90w"
                >

                    <div className="row modal-container" >
                        {props.modal.previous_photo !== null && (
                            <span onClick={previousPhoto}><i className='fa fa-chevron-left slide-left'/></span>
                        )}

                        {!props.status.successful ? (
                            <div className='col-12' style={{height:'500px'}}>
                                <Loader />
                            </div>
                        ) : (
                            <>
                                <div className='col-7 modal-image-container'>
                                    <div className='modal-image-body'>
                                        <img src={`data:image/jpeg;base64,${props.photo.content}`} alt='' className='modal-image'/>
                                    </div>
                                </div>
                                <div className='col-5 modal-info-section-container'>
                                    <InfoSection
                                        id={props.photo.id}
                                        description={props.photo.description}
                                        comments={props.comments}
                                        likes_number={props.photo.likes}
                                        user={props.user}
                                        getLikesRequestAction={props.getLikesRequestAction}
                                        postCommentRequestAction={props.postCommentRequestAction}
                                        authUser={props.authUser}
                                        commentStatus={props.commentStatus}
                                    />
                                </div>

                                <LikesModal
                                    show={props.likesModal.show}
                                    onHide={props.closeLikesModalAction}
                                    likes={props.likesModal.likes}
                                    status={props.likesStatus}
                                />

                            </>
                        )}

                        {props.modal.next_photo !== undefined && (
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
