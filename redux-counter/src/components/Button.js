import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  .btn {
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .add {
    background: #37b24d;
  }
  .remove {
    background: #f03e3e;
  }
`;

const Buttons = ({onCreate, onRemove}) => {
  return (
    <ButtonWrap>
      <div className="btn add" onClick={onCreate}>C-R-E-A-T-E</div>
      <div className="btn remove" onClick={onRemove}>R-E-M-O-V-E</div>
    </ButtonWrap>
  );
}

export default Buttons;
