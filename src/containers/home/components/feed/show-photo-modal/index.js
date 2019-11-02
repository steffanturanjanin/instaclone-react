import React from 'react';
import { Modal } from "react-bootstrap";

import './style.css';

const ShowPhotoModal = (props) => {

    function nextPhoto ()  {
        props.nextPhoto(props.photo);
    }

    function previousPhoto () {
        props.previousPhoto(props.photo);
    }

    if (props.photo !== null) {
        return (
            <>
                <Modal
                    dialogClassName="modal-90w"
                    show={props.show}
                    onHide={props.onHide}
                    centered
                >
                    <Modal.Body className='carousel-body'>
                        {props.modal.previous_photo !== null && (
                            <span onClick={previousPhoto}><i className='fa fa-chevron-left slide-left'/></span>
                        )}
                        <img src={`data:image/jpeg;base64,${props.photo.content}`} alt=''/>
                        {props.modal.next_photo !== undefined && (
                            <span onClick={nextPhoto}><i className='fa fa-chevron-right slide-right'/></span>
                        )}
                    </Modal.Body>
                </Modal>
            </>
        )
    } else {
        return null;
    }
};

export default ShowPhotoModal;
