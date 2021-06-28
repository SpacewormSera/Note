import {ADD_NOTE, DELETE_NOTE, SET_TEXT, ADD_TAG} from './types'

export function addNote() {
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

export function setText(text, textId) {
  return {
    type: SET_TEXT,
    payload: {text, textId}
  }
}

export function addTag(tagText, noteId) {
  return {
    type: ADD_TAG,
    payload: {tagText, noteId}
  }
}
