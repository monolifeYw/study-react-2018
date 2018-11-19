import React, { Component } from 'react';
import styled from 'styled-components';

const DimmedBox = styled.div`
  .dimmed-common {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    outline: 0;
    display: block;
  }

  .dimmed-bg {
    z-index: 1000;
    background: #000;
    opacity: 0.5;
  }

  .dimmed-contents {
    z-index: 1001;
    transition: transform 1s ease-out;
    // transition: opacity 1s ease-out;
  }

  &.show {
    .dimmed-contents {
      transform: translate(0, 0) !important;
      // opacity: 1;
    }
  }

  &.fade {
    .dimmed-contents {
      transform: translate(0, -25%);
      // opacity: 0;
    }
  }

  .input {
    transition: width .35s linear;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 20px;
    width: 150px;
    background-color: #dddddd;
    position: absolute;
    top:0;
  }

  .input-focused {
    width: 240px;
  }
`;


class DimmedContainer extends Component {
  constructor(props) {
    super(props);

    // this.isOpen = false;
    this.state = {
      isOpen: false,
      focused: false
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    // this.isOpen = true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // this.isOpen = false;

    this.setState((state) => ({
      isOpen: false
    }))
  }

  componentDidMount() {
    /* this.setState({
      isOpen: true
    }) */
    this.input.addEventListener('focus', this.focus);
    this.input.addEventListener('blur', this.focus);

    // https://stanko.github.io/react-rerender-in-component-did-mount/
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState((state) => ({
          isOpen: true
        }));
      })
    })
  }

  componentDidUpdate() {
    console.log('[componentDidUpdate]', this.state)
  }

  focus = () => {
    this.setState((state) => ({ focused: !state.focused }));
  }

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <DimmedBox
          // className={['fade', this.state.isOpen && 'show'].join(' ')}
          className={this.state.isOpen ? 'show' : 'fade'}
        >
          <div className="dimmed-common dimmed-bg"></div>
          <div
            className="dimmed-common dimmed-contents"
          >
            {this.props.children}
            <input type="text" ref={ref => this.input = ref}
            className={['input', this.state.focused && 'input-focused'].join(' ')}
            />
          </div>

        </DimmedBox>
      </React.Fragment>
    );
  }
}

export default DimmedContainer;
