import React from "react";
import { Link } from "react-router-dom";


export default function Loader({nextVideo, mainVideo }) {
	const PlayNext =
		nextVideo &&
		nextVideo.map(function(video) {
			return (
				<div className="playnext__link" key={video.id}>
					{video.id !== mainVideo.id ? (
						<Link to={`${video.id}`}>
							<div className="playnext__cell">
							<img src={video.image} alt="another video" className="playnext__thumbnail"/>
							<div className="playnext__info">
								<h5 className="playnext__title">{video.title}</h5>
								<h5 className="playnext__channel">{video.channel}</h5>
							</div>
							</div>
						</Link>
					) 
					:
					(
						<div key={video.id} className="playnext__point"></div>
					)}
				</div>
			);
		});

		return (
			<div className="playnext__box">
				<h4 className="playnext__heading">Next Video</h4>
				{PlayNext}
			</div>
		);}
