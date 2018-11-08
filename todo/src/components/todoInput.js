import React from 'react';
import styled from 'styled-components';

const TodoInputWrapper = styled.div`
  display: flex;
  padding: 1rem;

  input {
    flex: 1;
    font: 1.1rem;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #000;
  }

  .add-button {
    font: 1.1rem;
    font-weight: 500;
    width: 5rem;
    height: 2rem;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: skyblue;
  }

`;

export default ({ value, onChange, onInsert }) => {

  // enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  }

  return (
    <TodoInputWrapper>
      <input onChange={onChange} value={value} onKeyDown={handleKeyPress} />
      <div className="add-button" onClick={onInsert}>add</div>
    </TodoInputWrapper>
  );
}
