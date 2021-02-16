import React, {FunctionComponent} from "react";
import shortid from "shortid";

import Book from "../../components/Book";
import {LibraryBookGridContainer, GridItem} from "./styles";

type LibraryBookGridProps = {
  books: string[];
};

const LibraryBookGrid: FunctionComponent<LibraryBookGridProps> = ({books}) => {
  return (
    <LibraryBookGridContainer>
      {books.map((book, index) => (
        <GridItem column={index + 1}>
          <Book key={shortid.generate()} title={book} />
        </GridItem>
      ))}
    </LibraryBookGridContainer>
  );
};

export default LibraryBookGrid;
