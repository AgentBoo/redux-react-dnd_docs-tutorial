import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Square extends Component{
  render(){
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return(
      <div style={{
        backgroundColor: fill,
        color: stroke,
        height: '100%',
        width: '100%'
      }}>
        {this.props.children}
      </div>
    )
  }
};


Square.propTypes = {
  black: PropTypes.bool
};


export default Square;