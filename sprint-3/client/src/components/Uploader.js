import React, { Component } from "react";
import image from "../assets/Photos/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const url = `http://localhost:5000/videos`;

export default class Uploader extends Component {
  PushVideo = event => {
    event.preventDefault();

    if (!event.target.describe.value || !event.target.title.value) {
      alert("error");
    } else {
      axios
        .post(url, {description: event.target.describe.value, title: event.target.title.value, image: image})
        .then(res => {});
      event.target.reset();
    }
  };

	render() {
		return (
			<form action='/' method='POST' className="POST" onSubmit={this.PushVideo}>
			<div className="uploader">
				<h1 className="uploader__heading">Upload Video</h1>
				<div className="uploader__inputs">
					<div className="uploader__picsec">
						<h2 className="uploader__instruction">Video Thumbnail</h2>
						<img src={image} alt="" className="uploader__picpic" />
					</div>
					<div className="uploader__textsec">
						<div className="uploader__textinput">
							<h2 className="uploader__instruction">Title Your Video</h2>
							<input name='title' placeholder="Add a title to your video" className="uploader__textbox"/>
						</div>

						<div className="uploader__textinput">
							<h2 className="uploader__instruction">Add a Video Description</h2>
                            <input name='describe' placeholder="Add a description of your video" className="uploader__textboxbig"/>
						</div>
					</div>
				</div>

				<div className="uploader__buttons">
                    <h3 className="uploader__cancel">Cancel</h3>
					<button className="uploader__publish">PUBLISH</button>
				</div>
			</div>
			</form>
		);
	}
}
