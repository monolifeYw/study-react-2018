import React from 'react'
import styled from 'styled-components'

const WithModalStyled = WrappedComponent => ({ className, ...props }) => (
  <WrappedComponent className={className} {...props}>{props.children}</WrappedComponent>
)

export const StyledContentCommonModal = styled.div`
  margin: 0 auto;
  background: #fff;

  .modal-header {
    position: relative;
  }

  .modal-btn-close {
    position: absolute;
    color: transparent;
    padding: 1.4rem;
    right: 0.2rem;
    top: 0.2rem;
    background: #fff;
  }

  .modal-body {
    margin-top: 4.8rem;
    padding: 0 2.4rem;
    text-align: center;
  }

  .modal-title {
    font-size: 1.6rem;
    font-weight: bold;
  }
`

export const StyledIncomeModal = styled(WithModalStyled(StyledContentCommonModal))`
  .modal-noti {
    margin: 0.8rem 10% 0 10%;
    font-size: 1.4rem;
  }

  .modal-desc {
    margin: 0.4rem 16% 0 16%;
    font-size: 1.2rem;
    color: #959DA6;
  }

  .modal-btn-download {
    margin-top: 2.4rem;
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    text-align: center;
    background: #F27935;
    border-radius: 4px;
    color: #fff;
    font-size: 1.4rem;
  }
`

/* export const StyledIncomeModal2 = styled(StyledContentCommonModal)`
  .modal-noti {
    margin: 0.8rem 10% 0 10%;
    font-size: 1.4rem;
  }

  .modal-desc {
    margin: 0.4rem 16% 0 16%;
    font-size: 1.2rem;
    color: #959DA6;
  }

  .modal-btn-download {
    margin-top: 2.4rem;
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    text-align: center;
    background: #F27935;
    border-radius: 4px;
    color: #fff;
    font-size: 1.4rem;
  }
` */

export default WithModalStyled
