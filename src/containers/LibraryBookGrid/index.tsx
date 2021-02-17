import React, {FunctionComponent, ReactElement} from "react";
import {useDispatch} from "react-redux";
import shortid from "shortid";
import chunk from "lodash/chunk";

import {deleteBook} from "../../api/library";
import Book from "../../components/Book";
import {removeBook} from "../../state/slices/library";
import {LibraryBookGridContainer, GridItem} from "./styles";

type LibraryBookGridProps = {
  books: string[];
};

const MAX_GRID_COLUMNS = 6;

const LibraryBookGrid: FunctionComponent<LibraryBookGridProps> = ({books}) => {
  const dispatch = useDispatch();

  const buildLibraryShelves = (): ReactElement[] => {
    const chunks = chunk(books, MAX_GRID_COLUMNS);
    const items = [];

    for (let chunk = 0; chunk < chunks.length; chunk++) {
      for (let book = 0; book < chunks[chunk].length; book++) {
        items.push(
          <GridItem key={shortid.generate()} column={book + 1} row={chunk + 1}>
            <Book title={chunks[chunk][book]} handleOnDelete={handleBookDelete} />
          </GridItem>
        );
      }
    }

    return items;
  };

  const getMaxGridRows = (): number => {
    const numberOfBooks = books.length;
    return Math.floor(numberOfBooks / MAX_GRID_COLUMNS);
  };

  const handleBookDelete = async (title: string) => {
    try {
      await deleteBook(title);
      dispatch(removeBook(title));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LibraryBookGridContainer rows={getMaxGridRows()} columns={MAX_GRID_COLUMNS}>
      {buildLibraryShelves()}
    </LibraryBookGridContainer>
  );
};

export default LibraryBookGrid;
