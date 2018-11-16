import React, { Component } from 'react';

// 연결할 Component
import AppComponent from '../components/App';

/**
 * Container : App
 * 전체 페이지내에서의 최상위 구조를 잡는다.
 */
class App extends Component {
  render() {

    return (
      <AppComponent children={this.props.children} />

      // <AlertModal/>
    );
  }
}

export default App;
