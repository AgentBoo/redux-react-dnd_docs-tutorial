import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import Square from './Square';
import Knight from './Knight';
import { moveKnight, canMoveKnight } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



class Board extends Component{
  handleSquareClick(toX, toY){
    if(canMoveKnight(toX, toY)){
      moveKnight(toX, toY);
    }
  };

  renderPiece(x, y){
    const [ knightX, knightY ] = this.props.knightPosition;
    if (x === knightX && y === knightY){
      return <Knight />
    }
  };

  renderSquare(i){
    const x = i % 8;
    const y = Math.floor(i / 8);

    return(
      <div
        key={i}
        style={{ height: '12.5%', width: '12.5%' }}>

        <BoardSquare x={ x } y={ y }>
          { this.renderPiece(x, y) }
        </BoardSquare>
      </div>
    )
  };

  render(){
    const squares = [];
    for(let i = 0; i < 64; i++){
      squares.push(this.renderSquare(i))
    }
    return(
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '100%'
      }}>
        { squares }
      </div>
    )
  };
};

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};



Board = DragDropContext(HTML5Backend)(Board);
export default Board;
