import React from "react";

function RandomBtn(props) {
  return (
		<div className="form-group shadow-lg rounded p-0 mb-1">
			<label htmlFor="next">
				<h2 className="fas fa-random mx-1"></h2>
				<i>
					<small>Hit the button to display a random profile</small>
				</i>
			</label>
			<button
				id="start"
				onClick={props.handleRandom}
				className="btn w-100 btn-info btn-lg my-0 text-nowrap d-flex flex-row justify-content-center"
			>
				<h1 className="fa-stack fa-2x my-0 py-0">
					<i
						id="expIconGlobe"
						className="fas fa-globe fa-stack-2x fa-spin text-secondary"
					></i>
					<i
						id="expIconNeedle"
						className="fab fa-phabricator fa-pulse fa-stack-1x text-primary text-2xl"
					></i>
				</h1>
				<i className="text-primary text-xl">
					<b>
						<span className="text-muted">Start!</span>
					</b>
				</i>
			</button>
		</div>
	);
}

export default RandomBtn;
