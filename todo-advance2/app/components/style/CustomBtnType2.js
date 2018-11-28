import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

/**
 * Theme Provider를 이용한 방법
*/


// base
const BUTTON = styled.button`
  font-size: 12px;
  color: #fff;
  background: #000;
`

// using by custom btn type 2
const BtnTmpl = WrappedComponent => ({ className, ...props }) => (
  <WrappedComponent className={className} {...props}>{props.children}</WrappedComponent>
)

const TYPE1 = `
  color: #fff;
  background: #F27935;
  &.on {
    color: #0f0;
  }
`
const TYPE2 = `
  color: #F27935;
  background: #fff;
  border-radius: 8px;
  &.on {
    color: #f00;
    font-weight: bold;
  }
`

const TYPE_CUSTOM2 = styled(BtnTmpl(BUTTON))`
  ${({ btnType }) => btnType }
`

const TYPE_CUSTOM3 = styled(BUTTON)`
  ${({ btnType }) => btnType }
`

export const CustomBtnType2 = {
  TYPE1,
  TYPE2
}

// custom
const CustomBtn = (props) => {
  // return <[props.btnType] {...props} />
  // return <TYPE_CUSTOM2 {...props}></TYPE_CUSTOM2>
  return <TYPE_CUSTOM3 className={props.className} {...props}>{props.children}</TYPE_CUSTOM3>
  /* switch (props.btnType) {
    case CustomBtnType2.TYPE1:
      return <TYPE1 {...props}></TYPE1>
    case CustomBtnType2.TYPE2:
      return <TYPE2 {...props}></TYPE2>
  } */
}

/*
const obj = {
  TYPE1s: `
    color: #fff;
    background: #F27935;
  `,

  TYPE2s: `
    color: #F27935;
    background: #fff;
    border-radius: 8px;
  `
}

const TYPE1S = styled(BtnTmpl(BUTTON))`
  color: #fff;
  background: #F27935;
`

const TYPE2S = styled(BtnTmpl(BUTTON))`
  color: #F27935;
  background: #fff;
  border-radius: 8px;
` */

/* const TYPES = Object.assign({}, {
  TYPE1,
  TYPE2
}) */

/* const TYPE_CUSTOM = styled(BtnTmpl(BUTTON))`
  ${({ btnType }) => {
    switch (btnType) {
      case 1:
        return `
          color: #fff;
          background: #F27935;
        `
      case 2:
        return `
          color: #F27935;
          background: #fff;
          border-radius: 8px;
        `
    }
  }}
` */

/* const TYPE_CUSTOM2 = styled(BtnTmpl(BUTTON))`
  ${({ btnType }) => {
    // console.log(obj['TYPE' + btnType + 's'])
    // console.log(TYPE1s)
    // console.log(TYPES['TYPE' + btnType])
    // return obj['TYPE' + btnType + 's']
    // return btnType
    return btnType
  }}
` */



export default CustomBtn
