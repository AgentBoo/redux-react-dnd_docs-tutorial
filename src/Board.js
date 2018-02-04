import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';


class Board extends Component{
  renderSquare(x,y){
    const black = (x + y) % 2 === 1;

    const [ knightX, knightY ] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ? <Knight /> : null;

    return(
      <Square black={ black }>
        { piece }
      </Square>
    )
  }


  render(){
    return(
      <div style={{
        height: '100%',
        width: '100%'
      }}>
        { this.renderSquare(0,0) }
        { this.renderSquare(1,0) }
        { this.renderSquare(2,0) }
      </div>
    )
  }
};


Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default Board;
