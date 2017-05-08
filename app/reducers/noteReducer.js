import * as types from '../actions/Actions';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_NOTE:
      return Object.assign({}, state, {
        ...state,
        note: action.note
      });
      break;
    case types.UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          const {
            type,
            ...updatedNote
          } = action;
          return Object.assign({}, note, updatedNote);
        }

        return note;
      });
    case types.DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
    default:
      return state
  }
}

export default noteReducer;
