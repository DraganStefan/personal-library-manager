import React from 'react';
import { useBooks } from '../hooks/useBooks';
import { Container, Typography, Grid, Button, CircularProgress, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../services/api';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  const { books, isLoading, isError } = useBooks();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    window.location.reload();
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error loading books.</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>

      <Grid container spacing={4}>
        {books?.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>

      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/add')}
          style={{ marginTop: '16px' }}
        >
          Add New Book
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
