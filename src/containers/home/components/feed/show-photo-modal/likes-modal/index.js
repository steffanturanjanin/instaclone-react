import React from 'react'
import { Modal } from 'react-bootstrap';
import './style.css';

import Loader from '../../../../../../global/components/loader';

const LikesModal = (props) => {

    function onHide () {
        props.onHide();
    }

    return (
        <>
            <Modal
                size='md'
                show={props.show}
                onHide={onHide}
                centered
            >
                <Modal.Body style={{height:'450px', overflow: 'auto'}}>
                    <div className='row'>
                        {!props.status.successful ? (
                            <div className='col-12' style={{height:'400px'}}>
                                <Loader/>
                            </div>
                            ) :
                            (
                            props.likes.map((like, index) => {
                                    return (
                                        <div className='col-12' key={index}>
                                            <img className='info-section-header-user-avatar'
                                                 src={like.user.profile_picture === null ? 'https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                                                     : `data:image/jpeg;base64,${like.user.profile_picture}`} alt=''/>
                                            <p className='info-section-header-username'>{like.user.username}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default LikesModal;
