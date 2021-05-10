import SearchResultContainer from '../SearchResultContainer';
import React from 'react';

function Search() {
	return (
		<div>
			<h1>
				<i className="fas fa-search pr-4"></i>
				Search
			</h1>
			<p>
				Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
				efficitur malesuada. Mauris lorem urna, sodales accumsan quam non,
				tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
				volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor.
			</p>

			<SearchResultContainer />
		</div>
	);
}

export default Search;
