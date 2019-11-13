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
				`https://project-2-api.herokuapp.com/videos?api_key=Ohio`
			)
			.then((res) => {
				this.setState({sideVideos: res.data, videoId: res.data.id});

				axios
					.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=Ohio`)
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
				.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=Ohio`)
				.then((res) => {
					this.setState({mainVideo: res.data, videoId: res.data.id});
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
