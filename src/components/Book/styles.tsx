import styled from "styled-components";

type BookContainerProps = {
  foreground: string;
  background: string;
};

export const BookContainer = styled.div<BookContainerProps>`
  height: 200px;
  width: 100%;
  background: ${({background}) => background};
  color: ${({foreground}) => foreground};
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  display: flex;
  flex-direction: column;

  > .actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;

    > .individual-actions {
      display: flex;

      & .edit {
        margin-right: 20px;
      }
    }
  }
`;
