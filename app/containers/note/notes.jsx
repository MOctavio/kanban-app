import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editNote, deleteNote} from '../../actions/note/actions';
import Note from '../../components/note/note.jsx';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  onEditClick: bindActionCreators(editNote, dispatch),
  onDeleteClick: bindActionCreators(deleteNote, dispatch)
});

const NoteList = ({notes, onEditClick, onDeleteClick}) => (
  <div className="notes">
    {notes.map(note => <section className="note" key={note.id}>
      <Note note={note} onEdit={onEditClick} onDelete={onDeleteClick}/></section>)}
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, task: PropTypes.string.isRequired}).isRequired).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default NotesContainer;
