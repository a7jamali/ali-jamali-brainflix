import React, { Component } from "react";


export default class PlayNow extends Component {
	render() {
		return (
			<div className="playnow__box">
				<video
					poster={this.props.PlayNow.image && this.props.PlayNow.image}
					controls
					className="playnow__video"
				></video>
			</div>
		);
	}
}
