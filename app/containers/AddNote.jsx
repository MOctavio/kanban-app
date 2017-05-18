import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/note/actions';

const mapStateToProps = (state) => {
  return {notes: state.notes};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addNote({task: 'New task'}));
    }
  };
};

let AddNote = ({onClick}) => {
  return (
    <button onClick={() => onClick()}>Add note</button>
  );
};

AddNote = connect(mapStateToProps, mapDispatchToProps)(AddNote);

export default AddNote;
