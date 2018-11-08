import React from 'react';
import Counter from './Counter';
// import * as actions from '../actions';
import * as actions from '../ducks';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CounterLists = ({
  counters,
  onIncrement,
  onDecrement,
  onSetColor
}) => {
  const CounterList = counters.map((counter, idx) => {
    // console.log('counter', counter, idx);
    return (
      <Counter
        key={idx}
        index={idx}
        {...counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onSetColor={onSetColor}
      />
    )
  });

  return (
    <div>
      {CounterList}
    </div>
  );
}


// const mapStateToProps = (state) => ({counters: state.counters});
// const mapStateToProps = (state) => ({counters: state.toJS().counters});
const mapStateToProps = (state) => {
  return {counters: state.toJS().counters};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
  onSetColor: actions.setColor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterLists);
