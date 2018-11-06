import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  display: inline-block;
  padding: 1rem;
  border-radius: 3px;
  &:hover {
    background: black;
    color: white;
  }

  ${props => props.monolife && `
    background: skyblue;
  `}
`;

const CustomButton = styled.button``;


/* const StyledButton = ({children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
}; */

const StyledButton = ({children, ...rest}) => {
  console.log('children', children);
  console.log('rest', rest);
  return (
      <React.Fragment>
        <CustomButton>Btn</CustomButton>
        <Wrapper {...rest}>{children}</Wrapper>
        <Wrapper monolife></Wrapper>
      </React.Fragment>
  );
};

export default StyledButton;
