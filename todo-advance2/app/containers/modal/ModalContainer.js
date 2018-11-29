import React, { Component } from 'react'
import DimComponent from '../../components/modal/Dimmed'
import RootModal from '../../components/modal/RootModal'

export const ModalType = {
  INCOME: 'income',
  SHARE: 'share',
  LOADING: 'loading'
}

class ModalContainer extends Component {
  constructor(props) {
    super(props)
  }

  setType(type) {
    switch (type) {
      case ModalType.INCOME:
        return <IncomeModal onClose={() => this.props.onClose} />
    }
  }

  render() {
    return (
      <React.Fragment>
        <DimComponent {...this.props}></DimComponent>
        <RootModal type={this.props.type} rules={ModalType}></RootModal>
      </React.Fragment>
    )
  }
}

export default ModalContainer
