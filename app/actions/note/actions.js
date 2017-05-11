import uuid from 'node-uuid';
import {CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE} from './actionTypes';

export function createNote(note) {
    return {
        type: CREATE_NOTE,
        note: {
            id: uuid.v4(),
            ...note
        }
    };
};

export function updateNote(updatedNote) {
    return {
        type: UPDATE_NOTE,
        ...updatedNote
    };
};

export function deleteNote(id) {
    return {type: DELETE_NOTE, id};
};