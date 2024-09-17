import React, { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import { getBookById, updateBook } from '../services/api';
import { Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Book } from '../types';

const EditBook: React.FC = () => {
  const [book, setBook] = useState<Omit<Book, 'id'> | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        const fetchedBook = await getBookById(Number(id));
        setBook(fetchedBook);
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdateBook = async (updatedBook: Omit<Book, 'id'>) => {
    if (id) {
      await updateBook(Number(id), updatedBook);
      navigate('/');
    }
  };

  if (!book) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Book
      </Typography>
      <BookForm initialValues={book} onSubmit={handleUpdateBook} />
    </Container>
  );
};

export default EditBook;