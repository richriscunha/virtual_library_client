import React, {FunctionComponent, useRef} from "react";
import ReactDOM from "react-dom";
import {useClickAway} from "react-use";

import {ModalContainer} from "./styles";

type ModalProps = {
  title: string;
  closeLabel?: string;
  actionLabel?: string;
  onClose: VoidFunction;
  onAction: VoidFunction;
};

const Modal: FunctionComponent<ModalProps> = ({
  title,
  onAction,
  onClose,
  actionLabel = "OK",
  closeLabel = "Cancel",
  children,
}) => {
  const modalRef = useRef(null);
  const modalRoot = document.getElementById("modal");

  useClickAway(modalRef, () => onClose());

  return ReactDOM.createPortal(
    <ModalContainer>
      <div className="modal" ref={modalRef}>
        <div className="header">
          <p>{title}</p>
          <p onClick={onClose}>X</p>
        </div>
        <div className="body">{children}</div>
        <div className="footer">
          <div>
            <button type="button" onClick={onClose}>
              {closeLabel}
            </button>
            <button type="button" onClick={onAction}>
              {actionLabel}
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>,
    modalRoot!
  );
};

export default Modal;
