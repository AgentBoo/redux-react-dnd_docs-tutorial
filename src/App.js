import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import boardReducer from './reducers';


const store = createStore(boardReducer);


class App extends Component {
  // added <Provider />
  // added <main> with <Board />, and positioned them to be in the center of the page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React DnD and Redux
            <a className="App-link" href="https://github.com/AgentBoo/redux-reactDnD-docs-tutorial"> example </a>
          </h1>
        </header>

        <Provider store={ store }>
          <main className="App-main">
            <Board />
          </main>
        </Provider>

      </div>
    );
  };
};



export default App;
