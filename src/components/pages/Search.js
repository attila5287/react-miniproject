import SearchResultContainer from '../SearchResultContainer';
import React from 'react';

function Search() {
	return (
		<div>
			<h1 className="bg-light p-1 rounded text-primary text-center">
				<i className="fas fa-search mx-2"></i>
				Search
			</h1>

			<p>
				<i className="fas fa-info-circle mx-2"></i>
				Enter a dog breed name in search form below, doberman is default
				selection, here are some suggestions:
			</p>
			<p>
				<i className="fas fa-lightbulb text-warning mx-1"></i>chihuahua
				<i className="fas fa-lightbulb text-warning mx-1"></i> boxer
				<i className="fas fa-lightbulb text-warning mx-1"></i>pitbull
			</p>

			<SearchResultContainer />
		</div>
	);
}

export default Search;
