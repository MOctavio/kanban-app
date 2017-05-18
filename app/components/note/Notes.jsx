import React from 'react';
import Note from './note.jsx'
import PropTypes from 'prop-types'

const Notes = ({notes, onEditClick, onDeleteClick}) =>(
  <div className="notes">
    {notes.map(note =>
      <section className="note" key={note.id}>
        <Note note={note}
            onEdit={onEditClick}
            onDelete={onDeleteClick}/>
      </section>
    )}
  </div>
);

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Notes;
