import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';


class App extends Component {
  // added <main> with <Board />, and positioned them to be in the center of the page
  render() {
    const knightPosition = this.props.knightPosition
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React DnD and Redux example </h1>
        </header>
        <main className="App-main">
          <Board knightPosition={ knightPosition }/>
        </main>
      </div>
    );
  }
}

export default App;

// we want to keep the current knightPosition in some kind of state storage
// and have ways to change it
// to add interactivity, I have to make it so that a user interacts with a component, something happens, state changes, and the change is observed back by the user
// moveKnight function will directly modify the internal state
