import React, { Component } from 'react'
import styled from 'styled-components'

const DimStyledBlackDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`

const DimStyledWhiteDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.4);
  z-index: 100;
`

class DimContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dimmedType === 'black' ? <DimStyledBlackDiv /> : <DimStyledWhiteDiv />}
      </React.Fragment>
    )
  }
}

export default DimContainer
