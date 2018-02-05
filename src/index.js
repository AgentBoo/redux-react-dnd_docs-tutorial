import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { observe } from './Game'

observe(function(knightPosition){
  ReactDOM.render(
    <App knightPosition={ knightPosition }/>,
    document.getElementById('root')
  );
})


registerServiceWorker();
