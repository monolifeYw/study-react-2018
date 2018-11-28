import React from 'react'
// import queryString from 'query-string'

import styled, { ThemeProvider } from 'styled-components'

import AboutStyled from './AboutStyled'

/* const BUTTON = styled.button`
  border-radius: 4px;
  width: ${props => props.theme.width || '74px'};
  height: 32px;
  font-size: 12px;

  background: ${props => props.theme.backgroundColor || '#fff'};
  color: ${props => props.theme.color || '#000'};
  border: ${props => props.theme.border || ''};
` */

// case.1 theme provider
const BUTTON = styled.button(({ theme }) => ({
  'border-radius': '4px',
  'width': theme.width || '74px',
  'height': '32px',
  'font-size': '12px',
  'background': theme.backgroundColor || '#fff',
  'color': theme.color || '#000',
  'border': theme.border || ''
}))

BUTTON.defaultProps = {
  theme: {
    color: '#000',
    backgroundColor: '#fff',
    width: '50px'
  }
}

// 구독중 테마
const ingTheme = {
  color: '#fff',
  backgroundColor: '#F27935'
}

const ing2Theme = {
  border: '2px solid #F27935'
}

const ingInvertTheme = ({ color, backgroundColor }) => {
  return {
    color: backgroundColor,
    backgroundColor: color
  }
}

const PropsBox = styled.div`
  background: ${props => props.bg};
  width: 150px;
  height: 150px;
`

const PropsBox2 = styled.div(props => ({
  background: props.bg,
  width: '150px',
  height: '150px'
}))

// case.2 wrapped styled(Components)
const TestDivTmpl = (({ className, label }) => (
  <div className={className}>Test!!Div {label}</div>
))


const TestDIV = styled(TestDivTmpl)`
  background: #000;
  width: 50px;
  height: 50px;
  ${({ isRed }) => {
    return isRed ? `
      color: red;
    ` : `
      color: blue
    `
  }}
`

// case.3 outside declaring module
// case.3-1
const StyledDIV = styled(AboutStyled)`
  margin: 0 auto;
  // override
  width: 150px;
`
// case 3-2
const StyledTestTmpl = WrappedComponent => ({className}) => (
  <WrappedComponent id="styled_test" className={className}>234
  </WrappedComponent>
)
/* const StyledTestTmpl = (({ WrappedComponent }) => (
  <div id="styled_test" className={className}></div>
)) */
const StyledTmplDIV = styled(StyledTestTmpl(AboutStyled))`
  background: green;
  // override
  width: 50px;
`


export default function About({ location, match, history }) {
  console.log('======= ROUTER Test ===========')
  console.log('[about - location]', location)
  console.log('[about - history]', history)
  console.log('[about - match]', match)


  /**
    const query = queryString.parse(location.search)
    console.log('[about - query]', query)
  */
  console.log('===============================')

  const tmpl = (
    <div>
      <h6>about</h6>
      <p>
        Hi guys - name is :: {match.params.name || ''}
      </p>
      <button onClick={() => {
        history.push('/')
      }}>HoMe by javascript</button>

      <ThemeProvider theme={ingTheme}>
        <React.Fragment>
          <BUTTON>구독중</BUTTON>
          <ThemeProvider theme={ingInvertTheme}>
            <BUTTON>구독하기</BUTTON>
          </ThemeProvider>

          <ThemeProvider theme={ing2Theme}>
            <BUTTON>구독하기2 in ingTheme</BUTTON>
          </ThemeProvider>

        </React.Fragment>
      </ThemeProvider>

      <BUTTON>BASE</BUTTON>

      <ThemeProvider theme={ingTheme}>
        <BUTTON>구독중</BUTTON>
      </ThemeProvider>

      <ThemeProvider theme={ing2Theme}>
        <BUTTON>구독하기2</BUTTON>
      </ThemeProvider>

      <PropsBox bg="#0f0">PropsBox</PropsBox>
      <PropsBox2 bg="pink">PropsBox2</PropsBox2>

      <TestDIV label="test-label" isRed={true}></TestDIV>

      <StyledDIV>1</StyledDIV>
      <StyledTmplDIV>2</StyledTmplDIV>
    </div>

  )

  return tmpl
}
