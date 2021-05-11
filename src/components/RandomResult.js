import React from 'react';

function RandomContainer(props) {
	return (
		<div className="mini">
			{props.results.map((result) => (
				<div key={result} className="text-center container-fluid">
					<h3 className="text-capitalize">
						<i className="fas fa-dna mx-1"></i>
						<i className="text-muted">
							{result.split('/')[result.split('/').length - 2]}
						</i>
					</h3>
					<img
						alt={result}
						className="img-fluid border-0 bg-secondary rounded shadow-lg mb-2"
						src={result}
					/>
					{/* // https://images.dog.ceo/breeds/maltese/n02085936_3677.jpg */}
				</div>
			))}
		</div>
	);
}

export default RandomContainer;
