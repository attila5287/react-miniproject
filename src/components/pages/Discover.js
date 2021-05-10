import React from 'react';
import RandomContainer from '../RandomContainer';
import { Animated } from 'react-animated-css';

function Discover () {
	return (
		<div>
			<Animated animationIn="bounceInLeft" isVisible={true}>
				<h1 className="bg-secondary p-0 rounded text-secondary text-center">
					<i className="fas fa-compass mx-2"></i>
					<i>Discover</i>
				</h1>
			</Animated>
			<Animated animationIn="bounceInRight" animationInDelay="1000" isVisible={true}>
				<div className="p-1 text-muted">
					<h4 className="fas fa-cog fa-pulse mx-0 text-secondary"></h4>
					<h6 className="fas fa-cog fa-spin mx-0 text-secondary"></h6>
					<i>Tinder for all dog-persons and dogs out there!</i>
					<p className="mb-2">
						<i className="fas fa-paw bg-success p-1 rounded mx-1"></i> Paw up if
						you like
						<i className="fas fa-paw bg-primary p-1 rounded fa-flip-vertical mx-1"></i>{' '}
						Paw down if not
					</p>
				</div>
			</Animated>
<Animated animationIn="fadeInUp" animationInDelay="2000" isVisible={ true }>
			<RandomContainer/>
	
</Animated>
		</div>
	);
}

export default Discover;
