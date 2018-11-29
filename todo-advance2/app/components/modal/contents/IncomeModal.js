import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const INCOME = styled.div`
  margin: 0 auto;
  background: #fff;

  &.case2 {
    // background: #000;
  }

  .modal-header {
    position: relative;
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

  .modal-noti {
    margin: 0.8rem 10% 0 10%;
    font-size: 1.4rem;
  }

  .modal-btn-close {
    position: absolute;
    color: transparent;
    padding: 1.4rem;
    right: 0.2rem;
    top: 0.2rem;
    background: #fff;
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
const TYPE1 = `
  width: 272px;
  height: 239px;
`

const TYPE1_TMPL = styled(INCOME)`
  ${() => TYPE1}
`

const IncomeModal = props => {
  return (
    <TYPE1_TMPL className="modal-content type_inform case2">
      <div className="modal-header">
        <button className="modal-btn-close"><span>닫기</span></button>
      </div>
      <div className="modal-body">
        <p className="modal-title">구독하기 신청완료</p>
        <p className="modal-noti">알림 수신 및 라이브 방송 시청은 앱에서만 가능합니다.</p>
        <p className="modal-desc">(단, 앱 설정에 따라 알림 수신이 불가능 할 수 있습니다.)</p>
        <button className="modal-btn-download">앱 다운받기</button>
      </div>
    </TYPE1_TMPL>
  )
}

export default IncomeModal
