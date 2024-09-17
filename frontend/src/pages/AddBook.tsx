import React from 'react';
import BookForm from '../components/BookForm';
import { addBook } from '../services/api';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Book } from '../types';

const AddBook: React.FC = () => {
  const navigate = useNavigate();

  const handleAddBook = async (book: Omit<Book, 'id'>) => {
    await addBook(book);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Book
      </Typography>
      <BookForm initialValues={{ title: '', author: '', genre: '', description: '' }} onSubmit={handleAddBook} />
    </Container>
  );
};

export default AddBook;
