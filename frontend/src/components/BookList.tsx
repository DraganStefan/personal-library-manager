import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Book } from '../types';

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id} secondaryAction={
          <>
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(book.id)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(book.id)}>
              <Delete />
            </IconButton>
          </>
        }>
          <ListItemText
            primary={book.title}
            secondary={`${book.author} - ${book.genre}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;