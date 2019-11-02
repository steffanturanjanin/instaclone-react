import React from 'react';

const FeedItem = (props) => {


    function showModal () {
        props.showModal(props.photo);
    }

    return (
        <a className="post" onClick={showModal}>
            <figure className="post-image">
                <img src={`data:image/jpeg;base64,${props.photo.content}`} alt=""/>
            </figure>
            <div className="post-overlay">
                <p>
                    <span className="post-likes"><i className="fa fa-heart" aria-hidden="true"/> 150</span>
                    <span className="post-comments"><i className="fa fa-comment" aria-hidden="true"/> 10</span>
                </p>
            </div>
        </a>
    )
};

export default FeedItem;