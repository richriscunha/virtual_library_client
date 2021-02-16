import React, {FunctionComponent} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  title: string;
  onClose: VoidFunction,
  onAction: VoidFunction
};

const Modal: FunctionComponent<ModalProps> = ({ title, children }) => {
  const modalRoot = document.getElementById("modal");
  return ReactDOM.createPortal((
    <ModalContainer>
      <div className="modal">
        <div className="header">
          <p>{title}</p>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    </ModalContainer>
  ), modalRoot!);
};

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;

  background: rgba(75, 85, 99, .6);

  > .modal {
    margin-top: 120px;
    background: white;
    width: 650px;
    height: 475px;

    .header {
      background: black;
      color: white;
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    .body {
      width: 100%;
      height: 370px;
      padding: 20px;
    }

    .footer {
      background: black;
      color: white;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
`;

export default Modal;
