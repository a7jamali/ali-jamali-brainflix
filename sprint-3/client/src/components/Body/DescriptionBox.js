import React, { Component } from "react";
import Views from "../../assets/Icons/SVG/Icon-views.svg";
import Likes from "../../assets/Icons/SVG/Icon-likes.svg";


export default class DescriptionBox extends Component {
	render() {
		let Epoch = this.props.DescBox.timestamp;
		let USDate = new Date(Epoch).toLocaleDateString("en-US")
		return (
			<div className="playnow__description">
				<h1 className="playnow__title">
					{this.props.DescBox && this.props.DescBox.title}
				</h1>
				<div className="playnow__infobar">
				<div className="playnow__ct">
				<h2 className="playnow__channel">
					By{" "}
					{this.props.DescBox && this.props.DescBox.channel}
				</h2>
				<h3 className="playnow__time">
				{USDate}
		</h3>
			
				</div>
				<div className="playnow__vl">
				<div className="playnow__iv">
					<img src={Views} alt="views icon" className="playnow__icons" />
					<h3 className="playnow__views">
						{this.props.DescBox && this.props.DescBox.views}
					</h3>
				</div>
				<div className="playnow__il">
					<img src={Likes} alt="likes icon" className="movie__icons" />
					<h3 className="playnow__likes">
						{this.props.DescBox && this.props.DescBox.likes}
					</h3>
				</div>
				</div>
				</div>
					<p className="playnow__paragraph">
						{this.props.DescBox && this.props.DescBox.description}
					</p>
				</div>
		);
	}
}

