import SearchResultContainer from '../SearchResultContainer';
import React from 'react';

function Search() {
	return (
		<div>
			<h1 className="bg-secondary p-0 rounded text-primary text-center">
				<i className="fab fa-searchengin mx-2"></i>
				<i>
				Search
				</i>
			</h1>

			<div className="p-1 text-muted">
				<h4 className="fas fa-cog fa-pulse mx-0 text-secondary"></h4>
				<h6 className="fas fa-cog fa-spin mx-0 text-secondary"></h6>
				<i>
					Enter a dog breed name in search form below,
					<span className="fas fa-paw text-info mx-1"></span> puggle is default
					selection, here are some suggestions:
					<i className="fas fa-paw text-warning mx-1"></i>dingo
					<i className="fas fa-paw text-warning mx-1"></i> african
					<i className="fas fa-paw text-warning mx-1"></i> eskimo
				</i>
			</div>

			<SearchResultContainer />
		</div>
	);
}

export default Search;
