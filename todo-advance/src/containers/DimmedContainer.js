import React, { Component } from 'react';
import styled from 'styled-components';

const DimmedBox = styled.div`
  .dimmed-common {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    outline: 0;
    display: block;
  }

  .dimmed-bg {
    z-index: 1000;
    background: #000;
    opacity: 0.5;
  }

  .dimmed-contents {
    z-index: 1001;
  }
`;


class DimmedContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <DimmedBox>
          <div className="dimmed-common dimmed-bg"></div>
          <div className="dimmed-common dimmed-contents">
            {this.props.children}
          </div>
        </DimmedBox>
      </React.Fragment>
    );
  }
}

export default DimmedContainer;
