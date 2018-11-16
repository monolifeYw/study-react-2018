import React, { Component } from 'react';
import DimmedContainer from './DimmedContainer';
import styled from 'styled-components';

const TodoModal = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  position: relative;
  width: auto;
  max-width: 500px;
  margin: 1.75rem auto;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
`;

class TodoModalContainer extends Component {
  render() {
    return (
      <DimmedContainer>
        <TodoModal>
          TodoModalContainer
          <ul>
            <li>{this.props.idx}</li>
            <li><h5>{this.props.title}</h5></li>
            <li>{this.props.done}</li>
            <li>
              <button onClick={() => this.props.onClose()}>close button</button>
            </li>
          </ul>
        </TodoModal>
      </DimmedContainer>
    );
  }
}

export default TodoModalContainer;
