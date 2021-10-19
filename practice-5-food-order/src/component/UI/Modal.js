import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onClose} />;
}

function ModalContent(props) {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
}

const portalContent = document.getElementById('overlay');

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalContent)}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalContent
      )}
    </>
  );
}

export default Modal;
