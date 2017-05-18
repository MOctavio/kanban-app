import uuid from 'node-uuid';
import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from './actionTypes';

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note: {
            id: uuid.v4(),
            ...note
        }
    };
};

export function editNote(editedNote) {
    return {
        type: EDIT_NOTE,
        ...editedNote
    };
};

export function deleteNote(id) {
    return {type: DELETE_NOTE, id};
};
