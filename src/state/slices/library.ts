import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "../reducers";

interface LibraryState {
  books: string[];
  editBookTitle: undefined | string;
  isLoaded: boolean;
  showNewBookModal: boolean;
  showEditBookModal: boolean;
}

const initialState: LibraryState = {
  books: [],
  editBookTitle: undefined,
  isLoaded: false,
  showNewBookModal: false,
  showEditBookModal: false,
};

type UpdateBookPayloadAction = {
  original_book: string;
  new_book: string;
};

const slice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<string>) {
      return {
        ...state,
        books: [...state.books, action.payload],
        showNewBookModal: false,
      };
    },
    addBooks(state, action: PayloadAction<string[]>) {
      return {
        ...state,
        isLoaded: true,
        books: [...action.payload],
      };
    },
    removeBook(state, action: PayloadAction<string>) {
      return {
        ...state,
        isLoaded: true,
        books: [...state.books.filter((book) => book !== action.payload)],
      };
    },
    setEditBook(state, action: PayloadAction<string>) {
      return {
        ...state,
        editBookTitle: action.payload,
        showEditBookModal: true,
      };
    },
    toggleEditNewBookModal(state, action: PayloadAction) {
      return {
        ...state,
        showEditBookModal: !state.showEditBookModal,
      };
    },
    toggleShowNewBookModal(state, action: PayloadAction) {
      return {
        ...state,
        showNewBookModal: !state.showNewBookModal,
      };
    },
    updateBook(state, action: PayloadAction<UpdateBookPayloadAction>) {
      return {
        ...state,
        editBookTitle: undefined,
        showEditBookModal: false,
        books: [
          ...state.books.map((book) => {
            if (book === action.payload.original_book) {
              return action.payload.new_book;
            }

            return book;
          }),
        ],
      };
    },
  },
});

export const {
  addBook,
  addBooks,
  removeBook,
  setEditBook,
  toggleEditNewBookModal,
  toggleShowNewBookModal,
  updateBook,
} = slice.actions;

export default slice.reducer;

export const getAllLibraryBooks = (state: RootState) => state.library.books;
export const getEditBookTitle = (state: RootState) => state.library.editBookTitle;
export const isBooksLoaded = (state: RootState) => state.library.isLoaded;
export const showEditBookModal = (state: RootState) => state.library.showEditBookModal;
export const showNewBookModal = (state: RootState) => state.library.showNewBookModal;
