import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onDelete: (id: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography color="textSecondary">
          {book.author}
        </Typography>
        <Typography variant="body2" component="p">
          {book.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.href = `/edit/${book.id}`}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
