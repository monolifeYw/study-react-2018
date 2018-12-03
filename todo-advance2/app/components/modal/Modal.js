import React, { Component } from 'react'
import DimComponent from './Dimmed'
// import RootModal from '../../components/modal/RootModal'

import IncomeModalType1 from './IncomeModalType1'
import SnsModalType from './SnsModalType'

import styled from 'styled-components'

import { ModalType } from '../../constants'

const DialogTmpl = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 101;

  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;

  .modal-dialog {
    position: relative;
    width: auto;
    height: 100%;
  }

  .modal-dialog.align_center {
    display: flex;
    align-items: center;
  }

  &.hide {
    display: none
  }
`

const checkModal = ({ type, ...props }) => {

  switch (type) {
    case ModalType.INCOME_SUBSCRIBE_COMPLETE:
    case ModalType.INCOME_ALARM_COMPLETE:
      return <IncomeModalType1 type={type} {...props} />
    case ModalType.SHARE:
      return <SnsModalType {...props} />
  }
}


class ModalContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const viewClass = !this.props.isShow ? 'hide' : ''

    return (
      <React.Fragment>
        <DimComponent {...this.props}></DimComponent>
        <DialogTmpl className={viewClass}>
          <div className="modal-dialog align_center">
            {checkModal(this.props)}
          </div>
        </DialogTmpl>
      </React.Fragment>
    )
  }
}

export default ModalContainer
