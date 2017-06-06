import uuid from 'node-uuid';
import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from './action-types';

export const addNote = (note) => ({
  type: ADD_NOTE,
  note: {
    id: uuid.v4(),
    ...note
  }
});

export const editNote = (editedNote) => ({
  type: EDIT_NOTE,
  ...editedNote
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE, id
});
