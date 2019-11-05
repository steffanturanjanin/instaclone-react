import React from 'react';

const FeedItem = (props) => {


    function showInModal () {
        props.showInModal(props.photo);
    }

    return (
        <a className="post" onClick={showInModal}>
            <figure className="post-image">
                <img src={`data:image/jpeg;base64,${props.photo.content}`} alt=""/>
            </figure>
            <div className="post-overlay">
                <p>
                    <span className="post-likes"><i className="fa fa-heart" aria-hidden="true"/> {props.photo.likes} </span>
                    <span className="post-comments"><i className="fa fa-comment" aria-hidden="true"/> {props.photo.comments}</span>
                </p>
            </div>
        </a>
    )
};

export default FeedItem;