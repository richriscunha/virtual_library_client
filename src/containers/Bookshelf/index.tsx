import React, {FunctionComponent, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import isEmpty from "lodash/isEmpty";

import {fetchAllBooks} from "../../api/library";
import {
  addBooks,
  getAllLibraryBooks,
  isBooksLoaded,
  toggleShowNewBookModal,
} from "../../state/slices/library";
import EmptyLibrary from "../../components/EmptyLibrary";
import NewBookModal from "../NewBookModal";
import {BookshelfBottom, BookshelfContainer, BookshelfTop} from "./styles";
import LibraryBookGrid from "../LibraryBookGrid";

const Bookshelf: FunctionComponent = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(isBooksLoaded);
  const libraryBooks = useSelector(getAllLibraryBooks);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await fetchAllBooks();
        dispatch(addBooks(books));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const toggleNewBookModal = () => {
    dispatch(toggleShowNewBookModal());
  };

  if (!isLoaded) {
    return null;
  }

  if (isLoaded && isEmpty(libraryBooks)) {
    return (
      <>
        <EmptyLibrary onClick={toggleNewBookModal} />
        <NewBookModal />
      </>
    );
  }

  return (
    <>
      <BookshelfContainer>
        <BookshelfTop>
          <button type="button" onClick={toggleNewBookModal}>
            Add new book
          </button>
        </BookshelfTop>
        <BookshelfBottom>
          <LibraryBookGrid books={libraryBooks} />
        </BookshelfBottom>
      </BookshelfContainer>
      <NewBookModal />
    </>
  );
};

export default Bookshelf;
