import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editNote, deleteNote } from '../../actions/note/actions';
import NoteList from '../../components/note/note-list.jsx';

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: bindActionCreators(editNote, dispatch),
    onDeleteClick: bindActionCreators(deleteNote, dispatch)
  };
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default NotesContainer;
