import React, { Component } from 'react'
import CustomBtn2, { CustomBtnType2 } from '../style/CustomBtnType2'
import ModalContainer from '../modal/Modal'
import { ModalType, DimmedType } from '../../constants'

class ModalTestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
      infoModal: null
    }
  }

  modalOpen({ type, dimmedType }) {
    this.setState({
      isModalOpen: true,
      infoModal: {
        type,
        dimmedType
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
          <CustomBtn2 btnType={CustomBtnType2.TYPE1} onClick={() => this.modalOpen({
            type: ModalType.INCOME_SUBSCRIBE_COMPLETE,
            dimmedType: DimmedType.BLACK
          })}>Income Modal.1</CustomBtn2>
          <CustomBtn2 btnType={CustomBtnType2.TYPE1} onClick={() => this.modalOpen({
            type: ModalType.INCOME_ALARM_COMPLETE,
            dimmedType: DimmedType.BLACK
          })}>Income Modal.2</CustomBtn2>
          <CustomBtn2 btnType={CustomBtnType2.TYPE1} onClick={() => this.modalOpen({
            type: ModalType.SHARE,
            dimmedType: DimmedType.BLACK
          })}>SNS Modal</CustomBtn2>
        </div>

        <ModalContainer
          {...this.state.infoModal}
          isShow={this.state.isModalOpen}
          onClose={() => this.modalClose()}
        />

        {/* {this.state.isModalOpen && <ModalContainer
          {...this.state.infoModal}
          isShow={this.state.isModalOpen}
          onClose={() => this.modalClose()}
        />} */}

      </React.Fragment>
    )
  }
}

export default ModalTestPage
