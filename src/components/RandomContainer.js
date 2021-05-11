import React, { Component } from 'react';
import RandomBtn from './RandomBtn';
import ThumbsDownBtn from './ThumbsDownBtn';
import ThumbsUpBtn from './ThumbsUpBtn';
import RandomResult from './RandomResult';
import ModalGoodNews from './ModalGoodNews';
import API from '../utils/API';


class RandomContainer extends Component {
	state = {
		results: []
	};

	// When this component mounts, search the Giphy API for pictures of kittens
	componentDidMount() {
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
  thumbsUp = ( event ) => {
		event.preventDefault();
    
    console.log( 'test thumbs up' );

  };
  thumbsDown = ( event ) => {
		event.preventDefault();
    
    console.log( 'test thumbs down' );

  };
	render() {
		return (
			<div className="mini mb-5">
				<RandomBtn handleRandom={this.handleRandom} />
				<RandomResult results={this.state.results} />
				<ThumbsUpBtn thumbsUp={this.thumbsUp} />
        <ThumbsDownBtn thumbsDown={ this.thumbsDown } />
        <ModalGoodNews/>
			</div>
		);
	}
}


export default RandomContainer;
