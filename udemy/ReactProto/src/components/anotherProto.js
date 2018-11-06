import React, { Component } from 'react';

export default class AnotherProto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const applyStyle = {
      border: '1px solid #f00',
      background: '#cceecc'
    }
    return (
      <React.Fragment>
        <p
          // 요소내 주석
          style={applyStyle}
        >Apply to Style</p>
        {/* 조건부 rendering */}
        {this.state.show ? 'Show' : 'Hide'}<br />
        {this.state.show && 'Show is true'}
      </React.Fragment>
    )
  }
}

