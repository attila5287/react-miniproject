import React from "react";

function ResultList(props) {
  return (
		<div className="row">
			{props.results.map((result) => (
        <div className="col-4 d-flex" key={ result }>
					<img
						alt={result}
						className="img-fluid border-0 bg-secondary rounded shadow-lg m-1"
						src={result}
					/>
				</div>
			))}
		</div>
	);
}

export default ResultList;
