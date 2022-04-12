import {
  ADD_NOTE,
  DELETE_NOTE,
  POSTNOTES,
  SET_TEXT,
  ADD_TAG,
  DELETE_TAG,
  FETCHNOTES,
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_FAILURE,
  REGISTRATION_REQUEST_SUCCESS
} from './types'

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

export function setText(text, noteId) {
  return {
    type: SET_TEXT,
    payload: { text, noteId }
  }
}

export function addTag(tagText, noteId) {
  return {
    type: ADD_TAG,
    payload: { tagText, noteId }
  }
}

export function deleteTag(tagId) {
  return {
    type: DELETE_TAG,
    payload: { tagId }
  }
}

export function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST,
    payload: {}
  }
}

export function registrationRequestSuccess(data) {
  return {
    type: REGISTRATION_REQUEST_SUCCESS,
    payload: data
  }
}

export function registrationRequestFailure(error) {
  return {
    type: REGISTRATION_REQUEST_SUCCESS,
    payload: error
  }
}

export function fetchNotes() {
  return async dispatch => {
    const response = await fetch('http://localhost:5000/note', {
      method: 'POST',
      mode: 'cors'
    });
    const json = await response.json();
    console.log('json--> ', json);
    dispatch({ type: FETCHNOTES, payload: json });
  }
}

export function postNotes(text, noteId) {
  console.log('---> postNotes action');

  return async dispatch => {
    const response = await fetch('http://localhost:5000/note', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text, noteId)

    })
    const json = await response.json();
    const ret = { ...json, type: POSTNOTES, payload: {} }
    console.log('--->res', ret);
    dispatch({ type: POSTNOTES, payload: json });
  }
}

export function registerUser(userData) {
  return async dispatch => {
    dispatch(registrationRequest())

    const url = 'http://localhost:5000/register'

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    }

    const response = await fetch(url, requestOptions)

    const data = await response.json()
    // console.log(data);
    dispatch(registrationRequestSuccess(data))
  }
}
