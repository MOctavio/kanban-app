import React from 'react'
import {connect} from 'react-redux'
import {createNote} from '../actions/note/actions'

const mapStateToProps = (state, ownProps) => {
  return {task: 'New task'}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(createNote(ownProps))
    }
  }
};

let addNote = ({onClick}) => {
  return (
    <button onClick={e => {
      e.preventDefault();
      onClick();
    }}>Add note</button>
  )
}

addNote = connect(mapStateToProps, mapDispatchToProps)(addNote);

export default addNote
