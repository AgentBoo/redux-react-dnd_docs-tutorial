import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
// import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';


class BoardSquare extends Component{
  renderOverlay(color){
    return (
      <div style={{
        backgroundColor: color,
        height: '100%',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1
      }} />
    )
  };

  render(){
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>

        <Square black={ black }>
          { this.props.children }
        </Square>

        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('#61D9FB')}
        {isOver && canDrop && this.renderOverlay('#33FA6F')}
      </div>
    )
  }
};

BoardSquare.propTypes = {
  x                 : PropTypes.number.isRequired,
  y                 : PropTypes.number.isRequired,
  knightPosition    : PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  moveKnight        : PropTypes.func.isRequired,
  connectDropTarget : PropTypes.func.isRequired,
  isOver            : PropTypes.bool.isRequired,
  canDrop           : PropTypes.bool.isRequired
};



function canMoveKnight(toX, toY, knightPosition){
  const [ x, y ] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
};


const squareTarget = {
  canDrop(props){
    return canMoveKnight(props.x, props.y, props.knightPosition)
  },
  drop(props){
    if(canMoveKnight(props.x, props.y, props.knightPosition)){
       props.moveKnight(props.x, props.y)
    }
  }
};

function collect(connect, monitor){
  return {
    connectDropTarget : connect.dropTarget(),
    isOver            : monitor.isOver(),
    canDrop           : monitor.canDrop()
  }
};


BoardSquare = DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)
export default BoardSquare;
