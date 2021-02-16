import axios from "./http";

type GetBooksResponse = {
  books: string[];
};

export const fetchAllBooks = async (): Promise<string[]> => {
  const {data} = await axios.get<GetBooksResponse>("/");
  return data.books;
};
