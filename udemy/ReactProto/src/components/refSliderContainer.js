import React, { Component } from 'react';
import Slider from './refSlider';


export default class RefSliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };

    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.inputFocus.focus();
  }

  update() {
    //console.log(this.refs.blue); // <Slider ref="blue" update={() => this.update()} />
    //console.log(this.refs.red.refs.inp.value);

    this.setState({
      red: this.refs.red.refs.inp.value,
      green: this.refs.green.refs.inp.value,
      blue: this.refs.blue.refs.inp.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Slider ref="red" update={() => this.update()} />
        <label>{this.state.red}</label>
        <Slider ref="green" update={() => this.update()} />
        <label>{this.state.green}</label>
        <Slider ref="blue" update={() => this.update()} />
        <label>{this.state.blue}</label>
        <br />
        <button onClick={this.onFocus}>input focus</button>

        {/* // refs 의 또다른 방식 */}
        <input type="text" ref={ref => this.inputFocus = ref} />
      </React.Fragment>
    );
  }
}
