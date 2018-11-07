import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement, setColor } from '../actions';


const CounterWrap = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  color: #fff;
  font-size: 3rem;
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.75s;
`;

export function getRandomColor() {
  const colors = ['red', 'skyblue', 'blue', 'orange', 'green'];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

const Counter = ({
  number, color, onIncrement, onDecrement, onSetColor
}) => {

  return (
    <CounterWrap
      onClick={onIncrement}
      onContextMenu={(evt) => {
        evt.preventDefault();
        onDecrement();
      }}
      onDoubleClick={() => onSetColor(getRandomColor())}
      style={{background: color}}
    >
      {number}
    </CounterWrap>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement is not found'),
  onDecrement: () => console.warn('onDecrement is not found'),
  onSetColor: () => console.warn('onSetColor is not found')
}

function mapStateToProps(state) {
  console.log(state);
  return {
    number: state.number,
    color: state.color
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement,
    onSetColor: setColor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
