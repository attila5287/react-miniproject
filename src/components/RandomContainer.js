import React, { useState } from 'react';
import RandomBtn from './RandomBtn';
import ThumbsDownBtn from './ThumbsDownBtn';
import ThumbsUpBtn from './ThumbsUpBtn';
import RandomResult from './RandomResult';
import API from '../utils/API';


function RandomContainer() {
  const [ups, setUps] = useState(0);
  const [matches, setMatches] = useState(0);
	// When this component mounts, search the Giphy API for pictures of kittens
  const [results, setResults] = useState([
		// 'https://images.dog.ceo/breeds/dhole/n02115913_915.jpg'
	]);

	const handleRandom = () => {
		API.random()
			.then((res) => setResults( [res.data.message] ))
			.catch((err) => console.log(err));
	};
	// When the form is submitted, search the Giphy API for `this.state.search`
  const thumbsUp = () => {
		console.log('test thumbs up');
		setUps(ups + 1);
		const myNum = Math.floor(Math.random() * 5);
		console.log(`myNum`, myNum);
		const otherNum = Math.floor(Math.random() * 5);
		console.log(`otherNum`, otherNum);

		const match = Math.abs(myNum - otherNum) < 1;
		console.log(`matches`, match);
		if (match) {
			setMatches(matches + 1);
		}
		handleRandom();
	};
  const thumbsDown = () => {
		console.log('test thumbs down');
		handleRandom();
	};
		return (
			<div className="mini mb-5">
        <RandomBtn handleRandom={ () => {
          handleRandom();
          document.getElementById( 'start' ).classList.add( 'disabled' );
        } } />
				<ThumbsUpBtn
					count={ups}
					matches={matches}
					thumbsUp={thumbsUp}
				/>
				<ThumbsDownBtn thumbsDown={thumbsDown} />
				<RandomResult results={results} />
			</div>
		);
}


export default RandomContainer;
