import React, { Component } from "react";
import image from "../assets/Photos/Upload-video-preview.jpg";


export default class Uploader extends Component {
	render() {
		return (
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
							<input placeholder="Add a title to your video" className="uploader__textbox"/>
						</div>

						<div className="uploader__textinput">
							<h2 className="uploader__instruction">Add a Video Description</h2>
                            <input placeholder="Add a description of your video" className="uploader__textboxbig"/>
						</div>
					</div>
				</div>

				<div className="uploader__buttons">
                    <h3 className="uploader__cancel">Cancel</h3>
					<button className="uploader__publish">PUBLISH</button>
				</div>
			</div>
		);
	}
}
