import React from "react";



export default function PlayNext(props) {
	const suggestions =
		props.data.PlayNext &&
		props.data.PlayNext.map(function(video, index) {
			return (
				<div className="playnext__cell" key={index}>
					<img
						src={video.image}
						alt="another video"
						className="playnext__thumbnail"
					/>
					<div className="playnext__info">
						<h4 className="playnext__title">{video.title}</h4>
						<h5 className="playnext__channel">{video.channel}</h5>
					</div>
				</div>
			);
		});
	return (
		<div className="playnext__box">
			<h4 className="playnext__heading">Next Video</h4>
			{suggestions}
		</div>
	);
}
