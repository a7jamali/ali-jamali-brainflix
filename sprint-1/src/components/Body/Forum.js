import React from "react";
import Avatar from "../../assets/Photos/Mohan-muruge.jpg";



export default function Comments(props) {
	const newComments =
//props.data.comments &&
		props.data.comments.map(function(comment, index) {
			return (
				<div className="forum__cell" key={index}>
					<img src={Avatar} alt="avatar" className="forum__avatar"/>
					<div className="forum__info">
						<h3 className="forum__name">{comment.name}</h3>
						<h4 className="forum__date">{comment.date}</h4>
						<p className="forum__body">{comment.comment}</p>
					</div>
				</div>
			);
		});
	return (
		<div className="forum">
			<h2 className="forum__heading">3 Comments</h2>
			<form action="" className="comment">
			<h4 className="forum__motto">Join the Conversation</h4>
				<div className="comment__box">
					<img src={Avatar} alt="avatar" className="comment__avatar"/>
					<textarea  className="comment__text" name="comment" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
					<button className="comment__button" type="button">Comment</button>
				</div>
			</form>
			{newComments}
		</div>
	);
}
