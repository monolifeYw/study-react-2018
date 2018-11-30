import React from 'react'
import styled from 'styled-components'
import WithModalStyled, { StyledIncomeModal } from './WithModals'
import { ModalType } from '../../constants'


const SubscribeModal = styled(WithModalStyled(StyledIncomeModal))`
  width: 272px;
  height: 239px;

  // override test
  // .modal-title {
  //   font-size: 1rem;
  // }
`

const TITLE = {
  [ModalType.INCOME_SUBSCRIBE_COMPLETE]: '구독하기 신청완료',
  [ModalType.INCOME_ALARM_COMPLETE]: '알림 완료',
}

const Modal = ({ type, onClose }) => {
  return (
    <SubscribeModal className="modal-content">
      <div className="modal-header">
        <button className="modal-btn-close" onClick={() => onClose()}>
          <span>닫기</span>
        </button>
      </div>
      <div className="modal-body">
        <p className="modal-title">{TITLE[type]}</p>
        <p className="modal-noti">알림 수신 및 라이브 방송 시청은 앱에서만 가능합니다.</p>
        <p className="modal-desc">(단, 앱 설정에 따라 알림 수신이 불가능 할 수 있습니다.)</p>
        <button className="modal-btn-download">앱 다운받기</button>
      </div>
    </SubscribeModal>
  )
}

export default Modal
