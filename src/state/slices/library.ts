import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../reducers";

interface LibraryState {
  books: string[];
  isLoaded: boolean;
  showNewBookModal: boolean;
}

const initialState: LibraryState = {
  books: [],
  isLoaded: false,
  showNewBookModal: false,
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
    toggleShowNewBookModal(state, action: PayloadAction) {
      return {
        ...state,
        showNewBookModal: !state.showNewBookModal,
      };
    },
  },
});

export const {addBook, addBooks, toggleShowNewBookModal} = slice.actions;

export default slice.reducer;

export const isBooksLoaded = (state: RootState) => state.library.isLoaded;
export const showNewBookModal = (state: RootState) => state.library.showNewBookModal;
export const getAllLibraryBooks = (state: RootState) => state.library.books;
