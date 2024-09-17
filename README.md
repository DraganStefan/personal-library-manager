# Personal Library Manager

A responsive web application for managing a personal library of books, where you can **add**, **edit**, **delete**, and **view** books. The app checks the required fields when adding or updating a book, and is fully responsive, making it usable on different screen sizes.

## Project Structure

The project is divided into two main parts:

- **Backend**: A Node.js server with `index.js` for handling API requests related to book management (CRUD operations).
- **Frontend**: A React.js application using TypeScript, Formik for form handling, SWR for data fetching, Axios for API requests, and Material UI (MUI) for responsive UI components.

### Folder Structure

backend/

  ├── node_modules/

  ├── index.js            # Server-side code

  ├── package.json        # Backend dependencies and scripts

frontend/

  ├── components/         # React components (e.g., BookCard, BookList)

  ├── hooks/              # Custom hooks (e.g., useBooks for SWR)

  ├── pages/              # Page components (e.g., Home, AddBook, EditBook)

  ├── services/           # Axios services for API requests

  ├── types/              # TypeScript types (e.g., Book type)

  ├── package.json        # Frontend dependencies and scripts

## Setup and Running the Application

### Backend (Node.js Server)

1. **Navigate to the backend folder**

   ```bash
   cd backend
2. **Install dependencies:**

   ```bash
    npm install
3. **Run the server:**:

   ```bash
    npm start
    ```

The backend will run on <http://localhost:3001>.

### Frontend (React.js Application)

1. **Navigate to the frontend folder**

   ```bash
   cd frontend
2. **Install dependencies:**

   ```bash
    npm install
3. **Run the React app:**

   ```bash
    npm start
    ```

The frontend will run on http://localhost:3000 and communicate with the backend server for managing books.

Features
--------

1. **Add a Book**:

    - You can add new books to your library by clicking on the "Add New Book" button (located at the bottom of the homepage). This opens a form where you can enter details like title, author, genre, and description.
    - The app checks that all required fields are filled before submitting.
2. **Edit a Book**:

    - Each book in the list has an "Edit" button. You can update the details of any book.
3. **Delete a Book**:

    - Each book card has a "Delete" button to remove the book from your library.
4. **View Book List**:

    - The homepage shows a list of all the books in your library, displayed as cards with the title, author, genre, and description.

Responsive Design
-----------------

The application uses Material UI's Grid system to ensure responsiveness. The layout adjusts dynamically for different screen sizes:

- On small screens (mobile), each book card takes up the entire width of the screen.
- On medium screens (tablet), two book cards are displayed side by side.
- On larger screens (desktop), three book cards are displayed side by side.

The forms and buttons are also styled to remain user-friendly on all devices, ensuring a seamless experience regardless of screen size.
