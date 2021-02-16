import React, {FunctionComponent} from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import { deleteBook } from "../../api/library";
import Book from "../../components/Book";
import { removeBook } from "../../state/slices/library";
import {LibraryBookGridContainer, GridItem} from "./styles";

type LibraryBookGridProps = {
  books: string[];
};

const LibraryBookGrid: FunctionComponent<LibraryBookGridProps> = ({books}) => {
  const dispatch = useDispatch();

  const handleBookDelete = async (title: string) => {
    try {
      await deleteBook(title);
      dispatch(removeBook(title));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LibraryBookGridContainer>
      {books.map((book, index) => (
        <GridItem column={index + 1}>
          <Book key={shortid.generate()} title={book} handleOnDelete={handleBookDelete} />
        </GridItem>
      ))}
    </LibraryBookGridContainer>
  );
};

export default LibraryBookGrid;
