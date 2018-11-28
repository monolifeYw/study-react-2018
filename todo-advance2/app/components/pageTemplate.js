import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-top: 2rem;

  h1 {
    text-align: center;
    font: 4rem;
    font-weight: 300;
    margin: 0
  }

  .content {
    margin-top: 2rem;
  }
`;

export default ({children}) => {
  return (
    <Template>
      <h1>ToDo</h1>
      <div className="content">
        {children}
      </div>

{/*       <TodoItem
        done={true}
      >
        Test Item
      </TodoItem> */}
    </Template>
  );
};
