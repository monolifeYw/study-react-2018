import React from 'react';

export default ({nowStatus}) => {
  return (
    <p>{nowStatus ? 'Loading......' : 'Loaded' }</p>
  )
};
