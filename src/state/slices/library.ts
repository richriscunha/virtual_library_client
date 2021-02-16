import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../reducers";

interface LibraryState {
  books: string[];
  isLoaded: boolean;
}

const initialState: LibraryState = {
  books: [],
  isLoaded: false,
};

const slice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<string>) {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    addBooks(state, action: PayloadAction<string[]>) {
      return {
        isLoaded: true,
        books: [...action.payload],
      };
    },
  },
});

export const {addBook, addBooks} = slice.actions;

export default slice.reducer;

export const isBooksLoaded = (state: RootState) => state.library.isLoaded;
export const getAllLibraryBooks = (state: RootState) => state.library.books;
