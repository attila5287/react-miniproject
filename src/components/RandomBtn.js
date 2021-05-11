import React from "react";

function RandomBtn(props) {
  return (
		<div className="form-group shadow-lg rounded p-0 mb-1">
			<label htmlFor="next">
				<h2 className="fas fa-random mx-1"></h2>
				<i>
					<small>Display next random profile</small>
				</i>
			</label>
			<button
				name="next"
				onClick={props.handleRandom}
				className="btn w-100 btn-info btn-lg my-0 text-nowrap d-flex flex-row justify-content-center"
			>
				<h1 class="fa-stack fa-2x my-0 py-0">
					<i class="fas fa-globe fa-stack-2x fa-spin text-secondary"></i>
					<i class="fab fa-phabricator fa-pulse fa-stack-1x text-primary text-2xl"></i>
				</h1>
        <i className="text-primary text-xl">Discover</i>
			</button>
		</div>
	);
}

export default RandomBtn;
