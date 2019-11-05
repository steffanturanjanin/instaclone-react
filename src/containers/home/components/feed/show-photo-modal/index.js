import React from 'react';
import { Modal } from "react-bootstrap";
import './style.css';

import InfoSection from './info-section/index';

const ShowPhotoModal = (props) => {

    function nextPhoto ()  {
        props.nextPhoto(props.photo);
        props.setPhoto(props.modal.next_photo);
    }

    function previousPhoto () {
        props.previousPhoto(props.photo);
        props.setPhoto(props.modal.previous_photo);
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

                        <div className='col-7 modal-image-container'>
                            <div className='modal-image-body'>
                                <img src={`data:image/jpeg;base64,${props.photo.content}`} alt='' className='modal-image'/>
                            </div>
                        </div>
                        <div className='col-5 modal-info-section-container'>
                            <InfoSection/>
                        </div>
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
