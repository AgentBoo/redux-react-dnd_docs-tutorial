import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board'

class App extends Component {
  // added <main> with <Board />, and positioned them to be in the center of the page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, React DnD, and Redux example </h1>
        </header>
        <main className="App-main">
          <Board knightPosition={[0,0]}/>
        </main>
      </div>
    );
  }
}

export default App;
