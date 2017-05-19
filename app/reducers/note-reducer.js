import * as types from '../actions/note/action-types';

const NoteReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return [
        ...state,
        { ...action.note }
      ];
    case types.EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          const {
            ...updatedNote
          } = action;
          return { ...updatedNote };
        }

        return note;
      });
    case types.DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};

export default NoteReducer;
