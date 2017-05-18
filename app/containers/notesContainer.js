import {connect} from 'react-redux';
import {editNote, deleteNote} from '../actions/note/actions';
import Notes from '../components/note/notes.jsx';

import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  return {notes: state.notes};
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   onEditClick: editNote,
  //   onDeleteClick: deleteNote
  // };

  return {
    onEditClick: bindActionCreators(editNote, dispatch),
    onDeleteClick: bindActionCreators(deleteNote, dispatch)
  };
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;
