import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;

  background: rgba(75, 85, 99, 0.6);

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
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
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
