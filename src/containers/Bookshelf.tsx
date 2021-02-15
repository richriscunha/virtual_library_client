import React, {FunctionComponent, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {fetchAllBooks} from "../api/library";
import {addBooks, isBooksLoaded} from "../state/slices/library";

const Bookshelf: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(isBooksLoaded);

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

  return <p>Bookshelf</p>;
};

export default Bookshelf;
