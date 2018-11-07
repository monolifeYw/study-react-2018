import React from 'react';
import * as actions from '../actions';

import CountList from './CounterLists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({counters: state.counters});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
  onSetColor: actions.setColor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CountList);

/*
function mapStateToProps(state) {
  console.log('[mapStateToProps]', state);
  console.log('===========================');
  return {
    // number: state.numberReducer.number,
    // color: state.colorReducer.color
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onSetColor: actions.setColor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
