import React from 'react';
import queryString from 'query-string';

export default function About({ location, match, history }) {
  console.log('======= ROUTER Test ===========')
  console.log('[about - location]', location);
  console.log('[about - history]', history);
  console.log('[about - match]', match);

  const query = queryString.parse(location.search);
  console.log('[about - query]', query);
  console.log('===============================');
  return (
    <div>
      <h6>about</h6>
      <p>
        Hi guys - name is :: {match.params.name || ''}
      </p>
      <button onClick={() => {
        history.push('/')
      }}>HoMe by javascript</button>
    </div>
  );
};
