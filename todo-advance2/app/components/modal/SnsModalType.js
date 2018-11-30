import React from 'react'
import styled from 'styled-components'
import { StyledContentCommonModal } from './WithModals'

const SnsModal = styled(StyledContentCommonModal)`
  width: 288px;
  height: 291px;

  .modal-sns {
    margin-top: 0.8rem;
    padding: 0;
  }

  .modal-sns li {
    list-style: none;
    width: 80px;
    height: 96px;
    /* border: 1px solid #F27935; */
    float: left;
  }

  .modal-sns li a {
    display: block;
    text-decoration: none;
    color: #000;
  }

  .modal-sns li img {
    width: 48px;
    height: 48px;
    display: block;
    margin: 1.4rem auto 0 auto;
  }

  .modal-sns li img.modal-sns-shadow {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  }

  .modal-sns li span {
    display: block;
    margin-top: 1rem;
    font-size: 1rem;
  }
`

const viewDatas = [
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: '카카오톡',
    isShadow: false
  },
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: '페이스북',
    isShadow: false
  },
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: '카카오스토리',
    isShadow: false
  },
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: '라인',
    isShadow: false
  },
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: 'URL',
    isShadow: true
  },
  {
    imgUrl: '/images/tmon/sns_kakaotalk.png',
    title: 'SMS',
    isShadow: true
  },

]

const getSnsElement = () => {
  return viewDatas.map((data, idx) => {
    return (
      <li key={idx}>
        <a href="#">
          <img
            src={data.imgUrl}
            alt=""
            className={data.isShadow ? 'modal-sns-shadow' : ''}
          />
          <span>{data.title}</span>
        </a>
      </li>
    )
  })
}

const Modal = ({ onClose }) => {
  return (
    <SnsModal className="modal-content">
      <div className="modal-header">
        <button className="modal-btn-close" onClick={() => onClose()}>
          <span>닫기</span>
        </button>
      </div>
      <div className="modal-body">
        <p className="modal-title">공유하기</p>
        <ul className="modal-sns clearfix">
          {getSnsElement()}
        </ul>
      </div>
    </SnsModal>
  )
}

export default Modal
