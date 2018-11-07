import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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

const Counter = ({
  number, color, index, onIncrement, onDecrement, onSetColor
}) => {

  return (
    <CounterWrap
      onClick={() => onIncrement(index)}
      onContextMenu={(evt) => {
        evt.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{background: color}}
    >
      {number}
    </CounterWrap>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement is not found'),
  onDecrement: () => console.warn('onDecrement is not found'),
  onSetColor: () => console.warn('onSetColor is not found')
}

export default Counter;
