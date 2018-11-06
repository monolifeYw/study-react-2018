import React, { Component } from 'react';
import sassStyles from './styles/app.custom.scss';
import StyledButton from './components/StyledButton';

class App extends Component {
  render() {
    return (
      <div>

        <div className={sassStyles.box}>
          <span>box</span>
        </div>
        <div className={sassStyles.box_extend}>
          <span>extend box</span>
        </div>
        <h1>sass test</h1>

        <StyledButton monolife>버튼</StyledButton>
      </div>
    )
  }
}

export default App;
