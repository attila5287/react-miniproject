import React, { Component } from 'react';
import RandomBtn from './RandomBtn';
import ThumbsDownBtn from './ThumbsDownBtn';
import ThumbsUpBtn from './ThumbsUpBtn';
import RandomResult from './RandomResult';
import API from '../utils/API';


class RandomContainer extends Component {
  state = {
    match : 0,
		results: [], 
    ups : 0,
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
  thumbsUp = ( ) => {
    console.log( 'test thumbs up' );
    this.setState( { ups: this.state.ups + 1 } );
    const myNum = Math.floor(Math.random() * 5);
    console.log( `myNum`, myNum );
    const otherNum = Math.floor( Math.random() * 5 );
    console.log( `otherNum`, otherNum );
    
    const matched = (Math.abs( myNum - otherNum) < 1 );
    console.log( `matched`, matched );
    if (matched) {
      this.setState( { match: this.state.match + 1 } );
    }
		this.randomNext();
    
  };
  thumbsDown = ( ) => {
    console.log( 'test thumbs down' );
		this.randomNext();


  };
	render() {
		return (
			<div className="mini mb-5">
				<RandomBtn handleRandom={this.handleRandom} />
				<ThumbsUpBtn
					count={this.state.ups}
					match={this.state.match}
					thumbsUp={this.thumbsUp}
				/>
				<ThumbsDownBtn thumbsDown={this.thumbsDown} />
				<RandomResult results={this.state.results} />
			</div>
		);
	}
}


export default RandomContainer;
