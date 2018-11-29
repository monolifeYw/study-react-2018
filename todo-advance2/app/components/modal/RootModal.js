import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import IncomeModal from './contents/IncomeModal'

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
`

const checkModal = ({ rules, type, ...props }) => {
  switch (type) {
    case rules.INCOME:
      return <IncomeModal {...props} />
  }
}


const Modal = props => {
  console.log('Modal', props)

  return (
    <DialogTmpl>
      <div className="modal-dialog align_center">
        {checkModal(props)}
      </div>
    </DialogTmpl>
  )
}

export default Modal
