import axios from "./http";

type GetBooksResponse = {
  books: string[];
};

export const fetchAllBooks = async (): Promise<string[]> => {
  try {
    const {data} = await axios.get<GetBooksResponse>("/");
    return data.books;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (book: string): Promise<void> => {
  try {
    await axios.delete(`/${book}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

type EditBookPayload = {
  original_book: string;
  new_book: string;
};

export const editBook = async ({original_book, new_book}: EditBookPayload): Promise<void> => {
  try {
    await axios.patch("/", {original_book, new_book});
  } catch (error) {
    return Promise.reject(error);
  }
};

export const saveNewBook = async (book: string): Promise<void> => {
  try {
    await axios.post("/", {book});
  } catch (error) {
    return Promise.reject(error);
  }
};
