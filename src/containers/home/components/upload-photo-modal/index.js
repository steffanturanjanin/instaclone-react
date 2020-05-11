import React, { Component } from 'react';
import UploadPhotoButton from '../upload-photo-button/index';
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import './style.css'

class UploadPhotoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            photo: null,
            photo_url: null,
            description: null,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    //file_remember = null;

    handleClose = () => {this.setState({ show: false})};
    handleShow = () => {this.setState({ show: true, photo: null, photo_url: null, description: null})};
    onChange(e) {
        /*if (e.target.files[0] !== undefined) {
            this.file_remember = e.target.files[0];
        }*/
        this.setState({photo: e.target.files[0], photo_url: URL.createObjectURL(e.target.files[0])});

    }

    handleChange(event) {
        this.setState({description: event.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleUploadPhotoSubmit({
            photo: this.state.photo,
            description: this.state.description
        })
    };


    render() {
        const { uploadPhoto } = this.props;

        return(
            <>
                <UploadPhotoButton handleOnClick={this.handleShow}/>

                <Modal show={this.state.show} onHide={this.handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title> Upload Photo </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='col-md-12'>

                            <form className='upload-photo-container' onSubmit={this.onSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img alt='' src={this.state.photo_url === null ?
                                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYMDOtwg9M_ZVWCULk0kCyzASqXcwkAAVTEIKQDzukpT6w8T-U' :
                                            this.state.photo_url} />

                                        <input
                                            id="upload-photo-input"
                                            name="upload"
                                            type="file"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <textarea
                                            className='description'
                                            name="description"
                                            placeholder="Description..."
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                {!uploadPhoto.requesting && uploadPhoto.successful ?
                                    (
                                        <div className="upload-success-messages">
                                            { uploadPhoto.messages.map((message, index) => {
                                                return (
                                                    <p key={index}> {message.body}</p>
                                                )
                                            })}
                                        </div>
                                    )
                                    : null
                                }
                                <button type='submit' disabled={this.state.photo === null} className='btn btn-primary'>Post</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

UploadPhotoModal.propTypes = {
    handleUploadPhotoSubmit: PropTypes.func,
    user: PropTypes.object,
    uploadPhoto: PropTypes.shape({
        requesting: PropTypes.bool,
        successful: PropTypes.bool,
        messages: PropTypes.array,
        errors: PropTypes.object,
    })
};

export default UploadPhotoModal;
