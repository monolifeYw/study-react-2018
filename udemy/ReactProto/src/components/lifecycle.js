import React, { Component } from 'react';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      val: this.props.val
    }

    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('[LifeCycle] componentWillReceiveProps');
  }

  componentWillMount() {
    console.log('[LifeCycle] componentWillMount');
  }

  componentDidMount() {
    console.log('[LifeCycle] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[LifeCycle] shouldComponentUpdate');
    console.log('[LifeCycle] shouldComponentUpdate nextProps', nextProps);
    console.log('[LifeCycle] shouldComponentUpdate nextState', nextState);
    console.log('current', this.state.val, nextState.val);

    return nextState.val % 2 === 0;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[LifeCycle] componentWillUpdate');
    console.log('[LifeCycle] componentWillUpdate nextProps', nextProps);
    console.log('[LifeCycle] componentWillUpdate nextState', nextState);
    console.log('current', this.state.val, nextState.val);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[LifeCycle] componentDidUpdate');
    console.log('[LifeCycle] componentDidUpdate prevProps', prevProps);
    console.log('[LifeCycle] componentDidUpdate prevState', prevState);
  }

  update() {
    console.log('this.props.val', this.props);
    let newVal = this.state.val + 1;

    this.setState({
      val: newVal
    });
  }

  renderComponent() {
    return (
      <div>
        <button onClick={this.update}>LifeCycle Button</button>
        <span> :: {this.state.val}</span>
      </div>
    );
  }

  render() {
    return this.renderComponent();
  }
}
