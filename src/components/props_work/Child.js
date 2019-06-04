import React from 'react';
import { Component } from 'react';

  

  // Our child component that will display our names:
 export default class Child extends React.Component{
    render() {
      return (
        <div>
          <p>{this.props.first} {this.props.last}</p>
        </div>
      );
    }
  }

 