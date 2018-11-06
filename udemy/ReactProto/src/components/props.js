import React, { Component } from 'react';

export default class PropsProto extends Component {
  render() {
    return (
      <React.Fragment>
        <p>count : {this.props.count}</p>
        <p>desc : {this.props.desc}</p>
      </React.Fragment>
    );
  }
}
