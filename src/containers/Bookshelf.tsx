import React, {FunctionComponent, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import isEmpty from "lodash/isEmpty";

import {fetchAllBooks} from "../api/library";
import {addBooks, getAllLibraryBooks, isBooksLoaded} from "../state/slices/library";
import EmptyLibrary from "../components/EmptyLibrary";
import Modal from "../components/Modal";

const Bookshelf: FunctionComponent = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(isBooksLoaded);
  const libraryBooks = useSelector(getAllLibraryBooks)

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await fetchAllBooks();
      dispatch(addBooks(books));
    };

    fetchBooks();
  }, []);

  if (!isLoaded) {
    return null;
  }

  if (isLoaded && isEmpty(libraryBooks)) {
    return (
      <>
      <EmptyLibrary />
      <Modal title="Add new book" onAction={() => {}} onClose={() => {}}>
        Modal body goes here...
      </Modal>
      </>
    );
  }

  return <p>Bookshelf</p>;
};

export default Bookshelf;
