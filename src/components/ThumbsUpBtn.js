import React from "react";

function ThumbsUpBtn(props) {
  return (
    <div className="form-group shadow-lg rounded p-0 mb-2">
      <p>
			<i className="fas fa-thumbs-up">{props.count}</i>
      </p>
      <p>
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-thumbs-up fa-flip-horizontal mx-1"></i>
        { props.matches }
      </p>
			<button
				className="btn btn-success btn-lg my-0 w-100"
				onClick={props.thumbsUp}
			>
				<h1 className="fas fa-paw mb-0"></h1>
			</button>
		</div>
	);
}

export default ThumbsUpBtn;

      