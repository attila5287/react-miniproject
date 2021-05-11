import React, { Component } from 'react';
import RandomBtn from './RandomBtn';
import ThumbsDownBtn from './ThumbsDownBtn';
import ThumbsUpBtn from './ThumbsUpBtn';
import RandomResult from './RandomResult';
import API from '../utils/API';


class RandomContainer extends Component {
	state = {
		results: []
	};

	// When this component mounts, search the Giphy API for pictures of kittens
	componentD\Mount() {
		this.randomNext();
	}

	randomNext = () => {
		API.random()
			.then((res) => this.setState({ results: [res.data.message] }))
			.catch((err) => console.log(err));
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleRandom = (event) => {
		event.preventDefault();
		this.randomNext();
	};

	render() {
		return (
			<div className='mini'>		
				<RandomBtn handleRandom={this.handleRandom} />
				<RandomResult results={this.state.results} />
				<ThumbsUpBtn />
				<ThumbsDownBtn />
			</div>		
		);
	}
}


export default RandomContainer;
