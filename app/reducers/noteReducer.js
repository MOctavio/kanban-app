import * as types from '../actions/note/actionTypes';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return [
        ...state,
        {...action.note}
      ];
      break;
    case types.EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          const {
            type,
            ...updatedNote
          } = action;
          return {...updatedNote};
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
