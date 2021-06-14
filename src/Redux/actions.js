import {ADD_NOTE, DELETE_NOTE} from './types'

export function addNote() {
  console.log('-->dispatch action')
  return {
    type: ADD_NOTE,
  };
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  }
}

export function setText(text) {
  return {
    type: 'SET_TEXT',
    payload: text,
  }
}
