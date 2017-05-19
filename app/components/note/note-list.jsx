import React from 'react';
import Note from './note.jsx'
import PropTypes from 'prop-types'

const NoteList = ({notes, onEditClick, onDeleteClick}) =>(
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

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default NoteList;
