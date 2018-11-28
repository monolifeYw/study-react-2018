import React, { Component } from 'react'
import { withTheme } from 'styled-components'

class StyledComponent extends Component {
  render() {
    console.log('currentTheme', this.props.theme)
  }
}

export default withTheme(StyledComponent)
