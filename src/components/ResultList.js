import React from "react";

function ResultList(props) {
  return (
		<div className="row no-gutters align-items-center">
			{props.results.map((result) => (
				<div className="col-4" key={result}>
					<img
						alt={result}
						className="img-fluid border-0 bg-secondary rounded shadow-lg mb-2"
						src={result}
					/>
				</div>
			))}
		</div>
	);
}

export default ResultList;
