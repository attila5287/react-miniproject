import React from "react";

function ThumbsUpBtn(props) {
  return (
		<div className="form-group shadow-lg rounded p-0 mb-2">
			<label htmlFor="thumbsUp">
				<span className="text-lg fas fa-info-circle mx-1"></span>
				<i>Left: Number of total user likes, Right: Match</i>
			</label>
			<button
				id="thumbsUp"
				className="btn btn-success btn-lg my-0 w-100 d-flex justify-content-around"
				onClick={props.thumbsUp}
			>
				<span>
					<i className="far fa-user"></i>
					<i className="fas fa-thumbs-up mx-1"></i>
					{props.count}
				</span>
				<span className="h1 fas fa-paw mb-0"></span>
				<span>
					<i className="fas fa-thumbs-up"></i>
					<i className="fas fa-thumbs-up fa-flip-horizontal mx-1"></i>
					{props.matches}
				</span>
			</button>
		</div>
	);
}

export default ThumbsUpBtn;

      