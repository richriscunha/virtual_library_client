import styled from "styled-components";

type GridItemProps = {
  column: number;
  row?: number;
};

export const LibraryBookGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${({column}) => column};
  grid-row: 1;
`;
