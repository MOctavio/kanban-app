import React from 'react';
import Note from './Note.jsx'

export default({notes, onEdit, onDelete}) =>
    <div className="notes">{notes.map(note =>
      <section className="note" key={note.id}>
        <Note task={note.task}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)}/></section>)}
    </div>
