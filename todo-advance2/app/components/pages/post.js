import React from 'react';

export default function Post({ match }) {
  return (
    <p>
      포스트 #{match.params.id}
    </p>
  );
};
