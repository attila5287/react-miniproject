import React from 'react';

function ThumbsDownBtn(props) {
	return (
		<div className="form-group shadow-lg rounded p-0 mb-0">
			<button
				className="btn btn-primary btn-lg my-0 w-100"
				onClick={props.thumbsDown}
			>
				<h1 className="fas fa-paw fa-flip-vertical mb-0"></h1>
			</button>
			<i className="fas fa-thumbs-down"></i>
		</div>
	);
}

export default ThumbsDownBtn;
