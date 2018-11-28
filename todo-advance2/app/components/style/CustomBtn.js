import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export const CustomBtnType = {
  TYPE1: 1,
  TYPE2: 2
}

/**
 * Theme Provider를 이용한 방법
*/

/**
 *
 const theme = {
  colors: {
    primary: "royalblue",
    secondary: "teal",
    text: "black"
  },
  fontSize: {
    xl: "2.4rem",
    lg: "1.8rem",
    md: "1.3rem",
    nm: "1rem",
    sm: "0.75rem"
  }
}
*/

// base theme
const BUTTON = styled.button`
  font-size: 12px;
  color: ${props => props.theme.color || '#fff'};
  background: ${props => props.theme.backgroundColor || '#000'};

  // Pseudo-classes
  &.on {
    color: #000;
  }


  :hover {
    color: #f00;
  }
`

/*
const Text = BUTTON.extend`
  color: ${ props => props.theme.colors.text};
  line-height: 1.65;
`
*/

const type1 = {
  color: '#fff',
  backgroundColor: '#F27935'
  // '&.on': {
  //   color: '#f00'
  // }
}

const type2 = {
  color: '#F27935',
  backgroundColor: '#fff'
}

const selectTheme = (type) => {
  return type === CustomBtnType.TYPE1 ? type1 : type2
}

// custom
const CustomBtn = (props) => {
  const tmpl = (
    <ThemeProvider theme={selectTheme(props.btnType)}>
      <BUTTON className={props.className} {...props}>{props.children}</BUTTON>
    </ThemeProvider>
  )

  return tmpl
}

export default CustomBtn
