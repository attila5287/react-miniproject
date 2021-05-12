import React from 'react';

function ThumbsDownBtn(props) {
	return (
		<div className="form-group shadow-lg rounded p-0 mb-2">
			<button
				className="btn btn-primary btn-lg my-0 w-100"
				onClick={props.thumbsDown}
			>
				<span className="h1 fas fa-paw fa-flip-vertical mb-0"></span>
			</button>
		</div>
	);
}

export default ThumbsDownBtn;
