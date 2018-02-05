import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';



class Knight extends Component{
  render(){
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: '2em',
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <span> ♘ </span>
      </div>
    )
  }
};

Knight.propTypes = {
  connectDragSource   : PropTypes.func.isRequired,
  isDragging          : PropTypes.bool.isRequired
};



const knightSource = {
  beginDrag(props){
    return {}
  }
};

function collect(connect, monitor){
  return {
    connectDragSource  : connect.dragSource(),
    isDragging         : monitor.isDragging()
  }
};

Knight = DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
export default Knight;
