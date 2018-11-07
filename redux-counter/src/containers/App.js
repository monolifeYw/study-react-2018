import React, { Component } from 'react';
import CounterLists from './CounterLists';
import Button from '../components/Button';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

class App extends Component {
  render() {

    const { onCreate, onRemove } = this.props;


    return (
      <div>
        <Button
          onCreate={() => onCreate(getRandomColor())}
          onRemove={onRemove}
        />
        <CounterLists />
      </div>
    );
  }
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    onCreate: actions.create,
    onRemove: actions.remove
  }, dispatch);
}



export default connect(null, mapDispatchToProp)(App);
