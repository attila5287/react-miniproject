import React from 'react';

function RandomContainer(props) {
	return (
		<div className="mini">
			{props.results.map((result) => (
				<div key={result}>
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

export default RandomContainer;
