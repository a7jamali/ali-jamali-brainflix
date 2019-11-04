import React from "react";
import Views from "../../assets/Icons/SVG/Icon-views.svg";
import Likes from "../../assets/Icons/SVG/Icon-likes.svg";



export default function Description(props) {
	return (
		<div className="playnow__description">
			<h1 className="playnow__title">{props.data.title}</h1>


			<div className="playnow__infobar">
				<div className="playnow__ct">
					<h2 className="playnow__channel">{props.data.channel} </h2>
					<h4 className="playnow__time">{props.data.timestamp}</h4>
				</div>

			<div className="playnow__vl">
				<div className="playnow__iv">
					<img src={Views} alt="views icon" className="playnow__icons" />
					<h3 className="playnow__views">{props.data.views}</h3>
			</div>
			
			<div className="playnow__il">
				<img src={Likes} alt="likes icon" className="playnow__icons" />
				<h3 className="playnow__likes">{props.data.likes}</h3>
			</div>
			</div>
			</div>

			<p className="playnow__paragraph">{props.data.description}</p>
		</div>
	);
}
