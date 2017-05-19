import React from 'react';
import PropTypes from 'prop-types';
import Note from './note.jsx';

const NoteList = ({ notes, onEditClick, onDeleteClick }) => (
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
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default NoteList;
