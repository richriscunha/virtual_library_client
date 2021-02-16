import styled from "styled-components";

export const ApplicationContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const LibraryTitle = styled.div`
  background: #4b5563;
  color: #f3f4f6;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  p {
    font-size: 32px;
  }
`;

export const LibraryContainer = styled.div`
  padding: 20px;
  height: calc(100% - 60px);
`;
