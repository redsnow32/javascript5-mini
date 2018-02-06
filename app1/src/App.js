import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    return (
      <div className="App">
       <p> My name is { this.state.myName }</p>
      </div>
    );
  }
}

export default App;
