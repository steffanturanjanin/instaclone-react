import {Modal} from "react-bootstrap";
import React from "react";

const UploadPhotoModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> Upload Photo </Modal.Title>
            </Modal.Header>
            <Modal.Body className='upload-photo-container'>
                <img alt='' src={props.file_url === null ?
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYMDOtwg9M_ZVWCULk0kCyzASqXcwkAAVTEIKQDzukpT6w8T-U' :
                    props.file_url}/>
                <form>
                    Here goes the form for upload!
                    <input
                        name="upload"
                        type="file"
                        id="upload"
                        onChange={props.onChange}
                        //ref={this.fileInput}
                        //defaultValue={this.file_remember}
                    />
                </form>
            </Modal.Body>
        </Modal>
    )
};

export default UploadPhotoModal;