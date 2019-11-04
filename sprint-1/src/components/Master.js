import React from "react";
import PlayNow from "./Body/PlayNow";
import Comments from "./Body/Forum";
import PlayNext from "./Body/PlayNext";
import Description from "./Body/DescriptionBox";



export default function masterFunction(props) {
	return (
		<div>
			<div className="body">
			<div className="playnow__box"><PlayNow data={props.data} /></div>
				<div className="playnow__data">
					<Description data={props.data} />
					<Comments data={props.data} />
				</div>
				<PlayNext data={props.data}  />
			</div>
		</div>
	);
}
