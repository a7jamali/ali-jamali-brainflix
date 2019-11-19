import React, { Component } from "react";
import PlayNow from "./Body/PlayNow";
import Forum from "./Body/Forum";
import NextVideo from "./Body/PlayNext";
import DescriptionBox from "./Body/DescriptionBox";
import axios from "axios";


export default class Master extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideVideos: [],
			mainVideo: {},
			videoId: ""
		};
	}

	componentDidMount() {
		axios
			.get(
				`http://localhost:5000/videos`
			)
			.then((res) => {
				this.setState({sideVideos: res.data, videoId: res.data.id});

				axios
					.get(`http://localhost:5000/videos1af0jruup5gu`)
					.then((res) => {
						this.setState({
							mainVideo: res.data
						});
					});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevProps);
		let id = this.props.match.params.Id;
		if (this.props.match.params.Id !== prevProps.match.params.Id) {
			axios
				.get(`http://localhost:5000/videos/${id}`)
				.then((res) => {
					this.setState({mainVideo: res.data[0], videoId: res.data.id});
				});
		}
	}

	render() {
		return (
			<div>
				<div className="body">
					<PlayNow PlayNow={this.state.mainVideo}/>
					<div className="playnow__data">
						<DescriptionBox DescBox={this.state.mainVideo}/>
						<Forum comments={this.state.mainVideo} />
					</div>
					<NextVideo nextVideo={this.state.sideVideos} mainVideo={this.state.mainVideo}/>
					</div>
				</div>
		);
	}
}
