import React from 'react';

export default props => {
  return (
    <div>
      {React.Children.toArray(props.children)}

      {/* <DialogContainer/> */}
    </div>
  );
}

