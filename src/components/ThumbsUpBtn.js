import React from "react";

function ThumbsUpBtn(props) {
  return (
		<div className="form-group shadow-lg rounded p-0 mb-2">
			<i className="fas fa-thumbs-up"></i>
			<button
				className="btn btn-success btn-lg my-0 w-100"
				onClick={props.thumbsUp}
				dataToggle="modal"
				dataTarget="#ModalGoodNews"
			>
				<h1 className="fas fa-paw mb-0"></h1>
			</button>
		</div>
	);
}

export default ThumbsUpBtn;

      