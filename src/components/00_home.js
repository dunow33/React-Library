import React from 'react';
import { Component } from 'react';

export default class Home extends Component {
	render() {
		function start() {
			window.location.assign('/components');
		}

		return (
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Welcome to the React Fundamentals App</h1>

					<button id="butn" className="button" onClick={ start }>Start</button>
				</div>
			</div>
		);
	}
}
