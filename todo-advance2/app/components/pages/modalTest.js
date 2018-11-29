import React, { Component } from 'react'
import CustomBtn2, { CustomBtnType2 } from '../style/CustomBtnType2'
import ModalContainer, { ModalType } from '../../containers/modal/ModalContainer'

class ModalTestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
      infoModal: null
    }
  }

  modalOpen() {
    this.setState({
      isModalOpen: true,
      infoModal: {
        type: ModalType.INCOME,
        dimmedType: 'black',
      }
    })
  }

  modalClose() {
    this.setState({
      isModalOpen: false,
      infoModal: null
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <CustomBtn2 btnType={CustomBtnType2.TYPE1} onClick={() => this.modalOpen()}>Income Modal.1</CustomBtn2>
          <CustomBtn2 btnType={CustomBtnType2.TYPE1}>Income Modal.2</CustomBtn2>
          <CustomBtn2 btnType={CustomBtnType2.TYPE2}>SNS Modal</CustomBtn2>
        </div>
        {this.state.isModalOpen && <ModalContainer
          {...this.state.infoModal}
          onClose={() => this.modalClose()}
        />}
      </React.Fragment>
    )
  }
}

export default ModalTestPage
