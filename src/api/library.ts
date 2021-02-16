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

export const saveNewBook = async (book: string): Promise<void> => {
  try {
    await axios.post("/", {book});
  } catch (error) {
    return Promise.reject(error);
  }
};
