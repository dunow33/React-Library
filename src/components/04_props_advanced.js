import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen-embed';


export default class Props extends Component {
  render(){
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/state');
    }
    return(
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">Props</h1> 

          <hr className="basic-rundown" />


          <p>Props stands for an object of data that holds key-value pairs that we want to access
          in the component through JSX expressions.</p>
        
          <hr className="key-points" />

          <dl className="learning-list">
            <dt className="learning-point-item-name">JSX expression</dt>
              <dd className="learning-point-item-text">Placed inside of curly braces, this renders as regular JavaScript.</dd>
            <dt className="learning-point-item-name">Read-Only</dt>
              <dd className="learning-point-item-text">Props should never be modified by the component where they are created.</dd>
          </dl>


          <hr className="explanation" />

          <p>We're back to our original code again. If you recall, we stated previously that props stands for the 
          arbitrary inputs that are passed in to the function component.</p>
          <p>In this code, the function component One takes in the argument "props" on line 1. Then the argument is 
          used on line 2 in a JSX expression as "props.name". </p>
          <p>This is setting name as a key inside of the props object and its value is set to "Kaylea" inside of the 
          App Component where functional component One is called.</p>
          <p> So props is an object with a key of "name" and a value of "Kaylea" that renders the value where props.name is.</p>
          <hr className="codepen" />
          <Codepen height="350" user="dunow33" hash="jodMbp" />
          <p>Let's move on to State.</p>
          <button id="butn" className="button" onClick={next}>Next</button>
        </div>
      </div>
    );
  }
}
