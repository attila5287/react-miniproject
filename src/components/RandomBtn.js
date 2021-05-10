import React from "react";

function RandomBtn(props) {
  return (
		<div className="form-group w-50 shadow-lg rounded p-0 mb-1">
			<label htmlFor="next">
				<i className="fas fa-info-circle mx-1"></i>
				<i>
					<small>Display next random profile</small>
				</i>
			</label>
			<button
				name="next"
				onClick={props.handleRandom}
				className="btn w-100 btn-info btn-lg my-0"
			>
				<i className="fas fa-forward mx-1"></i>
				Next
				<i className="fas fa-forward mx-1"></i>
			</button>
		</div>
	);
}

export default RandomBtn;
