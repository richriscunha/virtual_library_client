import styled from "styled-components";

type LibraryBookGridContainerProps = {
  columns: number;
  rows: number;
};

type GridItemProps = {
  column: number;
  row?: number;
};

export const LibraryBookGridContainer = styled.div<LibraryBookGridContainerProps>`
  display: grid;
  grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({rows}) => `repeat(${rows}, 1fr)`};
  column-gap: 10px;
  row-gap: 10px;
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};
`;
