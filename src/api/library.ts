import axios from "./http";

export const fetchAllBooks = async (): Promise<string[]> => {
  const books = await axios.get("/");
  console.log("b", books);
  return [];
};
