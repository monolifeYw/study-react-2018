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
  color: ${props => props.theme.color['type' + props.btnType] || props.theme.color.base};
  background: ${props => props.theme.bgColor['type' + props.btnType] || props.theme.bgColor.base};

  // Pseudo-classes
  &.on {
    color: #000;
  }


  :hover {
    color: #f00;
  }
`

const Theme = {
  fontSize: '12px',

  color: {
    base: '#fff',
    type1: '#fff',
    type2: '#F27935'
  },

  bgColor: {
    base: '#F27935',
    type1: '#F27935',
    type2: '#fff',
  },

  _on: {
    base: {
      color: '#000',
    },
    type1: {
      color: '#f00'
    }
  },

  __hover: {
    color: '#0f0'
  }
}


// custom
const CustomBtn = (props) => {
  const tmpl = (
    <ThemeProvider theme={Theme}>
      <BUTTON className={props.className} {...props}>{props.children}</BUTTON>
    </ThemeProvider>
  )

  return tmpl
}

export default CustomBtn
