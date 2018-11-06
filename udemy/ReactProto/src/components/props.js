import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropsProto extends Component {
  static defaultProps = {
    base: 'base value',
    count: 0
  }

  static propTypes = {
    base: PropTypes.string,
    count: PropTypes.number,
    numberVal: PropTypes.number,
    isRequired: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <p>base : {this.props.base}</p>
        <p>count : {this.props.count}</p>
        <p>desc : {this.props.desc}</p>
      </React.Fragment>
    );
  }
}
