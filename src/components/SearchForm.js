import React from "react";

function SearchForm(props) {
  return (
		<form>
			<div className="form-group shadow-lg rounded p-1 mb-2">
				<label htmlFor="search">
          <h4 className='d-flex flex-row justify-content-center'>
          <i className="fas fa-search-plus mx-1"></i>
            <i className="text-info"> Query By Breed: </i>
          </h4>
				</label>
				<input
					onChange={props.handleInputChange}
					value={props.search}
					name="search"
					type="text"
					className="form-control shadow-lg"
					placeholder="Search for images"
					id="search"
				/>
				<button
					onClick={props.handleFormSubmit}
					className="btn btn-primary mt-3"
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchForm;
