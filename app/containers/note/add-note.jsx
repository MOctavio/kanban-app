import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addNote} from '../../actions/note/actions';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(addNote({task: 'New task'}));
  }
});

let AddNote = ({onClick}) => {
  return (
    <button onClick={() => onClick()}>Add note</button>
  );
};

AddNote.propTypes = {
  onClick: PropTypes.func.isRequired
};

AddNote = connect(mapStateToProps, mapDispatchToProps)(AddNote);

export default AddNote;
