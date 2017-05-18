import React from 'react';
import AddNote from './addNote.jsx';
import NotesContainer from './notesContainer';

const App = () => (
  <section className="container">
    <NotesContainer/>
    <AddNote/>
  </section>
);
export default App
