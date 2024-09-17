import axios from 'axios';
import { Book } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getBooks = async (): Promise<Book[]> => {
  const response = await api.get('/books');
  return response.data;
};

export const getBookById = async (id: number): Promise<Book> => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

export const addBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
  const response = await api.post('/books', book);
  return response.data;
};

export const updateBook = async (id: number, book: Omit<Book, 'id'>): Promise<Book> => {
  const response = await api.put(`/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await api.delete(`/books/${id}`);
};