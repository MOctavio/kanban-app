import React from 'react';
import AddNote from './note/add-note.jsx';
import NotesContainer from './note/notes';

const App = () => (
  <section className="container">
    <NotesContainer/>
    <AddNote/>
  </section>
);
export default App;
