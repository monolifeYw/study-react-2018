import React, { Component } from 'react';

// 1. props
import PropsProto from './props';

// 2. refs
import RefSliderContainer from './refSliderContainer';

// 3. lifeCycle
import LifeCycle from './lifecycle';

// 4. another
import AnotherProto from './anotherProto';

export default class App extends Component {
  render() {
    return (
      <div>
        <PropsProto count={10} desc="required test" numberVal={7} />
        <hr />
        <RefSliderContainer />
        <hr />
        <LifeCycle val={0} />
        <hr />
        <AnotherProto />
      </div>
    );
  }
}
