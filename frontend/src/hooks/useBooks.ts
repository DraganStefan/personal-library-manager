import useSWR from 'swr';
import { getBooks } from '../services/api';
import { Book } from '../types';

const fetcher = async () => {
  const books = await getBooks();
  return books;
};

export const useBooks = () => {
  const { data, error, mutate } = useSWR<Book[]>('/books', fetcher);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};