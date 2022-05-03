import React, { Component } from 'react';
class photo extends Component {
    state = {}
    render() {
        return (
            <div className="photo">
                <img src={this.props.photo.largeImageURL} className="img" />
                <div className="detailsContainer">
                    <div className="details">
                        <span>Likes : {this.props.photo.likes}</span>
                        <img src="heart.png" className="likeImg" />
                        <span>Views : {this.props.photo.views}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default photo;