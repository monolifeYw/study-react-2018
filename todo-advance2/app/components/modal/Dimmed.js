import React, { Component } from 'react'
import styled from 'styled-components'
import { DimmedType } from '../../constants'

const DimmedCommon = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  &.hide {
    display: none
  }
`


const DimStyledBlackDiv = styled(DimmedCommon)`
  background: rgba(0, 0, 0, 0.4);
`

const DimStyledWhiteDiv = styled(DimmedCommon)`
  background: rgba(255, 255, 255, 0.4);
`

class DimContainer extends Component {
  render() {
    const viewClass = !this.props.isShow ? 'hide' : ''

    return (
      <React.Fragment>
        {this.props.dimmedType === DimmedType.BLACK ? <DimStyledBlackDiv className={viewClass} /> : <DimStyledWhiteDiv className={viewClass} />}
      </React.Fragment>
    )
  }
}

export default DimContainer
