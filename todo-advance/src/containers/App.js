import React, { Component } from 'react';

// 연결할 Component
import AppComponent from '../components/App';

// dom utils
import DocumentModalControl from '../utils';

/* import { setLog } from 'src/weblog';
const log = setLog('app:log'); */

const debug = require('debug')('app');

/* const debug = require('debug');
debug.enabled('app') */

/**
 * Container : App
 * 전체 페이지내에서의 최상위 구조를 잡는다.
 */
class App extends Component {
  componentDidMount() {
    console.log('[[[[[[[[[[[[[[[componentDidMount]]]]]]]]]]]]]]]');
    debug('componentDidMount');

    DocumentModalControl.setEvent();
  }

  render() {
    return (
      <AppComponent children={this.props.children} />

      // <AlertModal/>
    );
  }
}

export default App;
