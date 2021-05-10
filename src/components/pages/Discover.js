import React from 'react';
import RandomContainer from '../RandomContainer';
function Discover() {
	return (
		<div>
			<h1 className="bg-secondary p-0 rounded text-secondary text-center">
				<i className="fas fa-compass mx-2"></i>
				<i>Discover</i>
			</h1>

			<div className="p-1 text-muted mb-5">
				<h4 className="fas fa-cog fa-pulse mx-0 text-secondary"></h4>
				<h6 className="fas fa-cog fa-spin mx-0 text-secondary"></h6>
				<i>Tinder for all dog-persons and dogs out there!</i>
				<p>
					<i className="fas fa-paw bg-success p-1 rounded mx-1"></i> Paw up if
					you like
					<i className="fas fa-paw bg-primary p-1 rounded fa-flip-vertical mx-1"></i>{' '}
					Paw down if not
				</p>

				<RandomContainer />
			</div>
		</div>
	);
}

export default Discover;
