import React from 'react';
import {Component} from 'react';
import Codepen from 'react-codepen-embed';

export default class SetState extends Component {
	render(){
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/constructor');
    }
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">setState</h1> 

					<hr className="basic-rundown" />
				
					<p>Since state is data that changes, there must be a way to change it.</p>
					<p>It can exist locally within a Class Component but not all components have state.</p>


					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">Modify carefully</dt>
					    <dd className="learning-point-item-text">Always use this.setState and never this.state when changing state.</dd>
					    <dt className="learning-point-item-name">Changes can be Asynchronous</dt>
					    <dd className="learning-point-item-text">If there are multiple setState() calls, they may occur out of order</dd>
					    <dt className="learning-point-item-name">Updates merge</dt>
					    <dd className="learning-point-item-text">setState() merges the new object with the current state.</dd>
					    
					</dl>


					<hr className="explanation" />

					<p>Setting the initial state was fairly simple but changing it gets a little more complicated. </p>
					<p>We have the same codepen from the last page below so that we can see how that state changes. There are a few different 
					lines of code that are contributing to make this happen.</p>
					<p>Right under the constructor we have a function called "change" that is taking in an event and changing the state to be 
					equal to the value of the event that is triggering the function.</p>
					<p>You can see this in action by typing a name into the input box on the Result tab.</p>


					<hr className="codepen" />
					<Codepen height="350" user="dunow33" hash="RLZpaR" />

					<p>Now, we'll take a look at Constructor.</p>
					<button id="butn" className="button" onClick={next}>Next</button>
				</div>
			</div>
			
		);
	}
}