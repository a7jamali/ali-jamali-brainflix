import React from "react";
import PlayNow from "../../assets/Video/BSV.mp4";



export default function mainVideo(props) {
	return (
		<div className="playnow">
			<video src={PlayNow} controls className="playnow__video"></video>
		</div>
	);
}
