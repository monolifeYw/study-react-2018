// 차트안에 스테이트를 사용하지 않음
// 함수형으로 컴포넌트를 만듬

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return (
    <span>
      <Sparklines height={100} width={80} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </span>
  );
};
