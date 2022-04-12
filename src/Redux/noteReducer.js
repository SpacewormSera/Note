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

const initialState = { notes: [{ id: 777, noteText: '', tags: [] }], fetchedNotes: [] };


export const noteReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NOTE:
      return { ...state, notes: [...state.notes, { id: Date.now(), noteText: '', tags: [] }] }

    case DELETE_NOTE:
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) }

    case SET_TEXT:
      console.log(action)
      return {
        ...state, notes: [...state.notes.map(note => {
          if (note.id === action.payload.noteId) {
            note.noteText = action.payload.text;
          }
          return note;
        })]
      }

    case ADD_TAG:
      return {
        ...state, notes: [...state.notes.map(note => {
          if (note.id === action.payload.noteId) {
            note.tags.push({ id: Date.now(), text: action.payload.tagText });
          }
          return note;
        })]
      }

    case DELETE_TAG:
      return {
        ...state, notes: [...state.notes.map(note => {
          note.tags = note.tags.filter(tag => tag.id !== action.payload.tagId);
          return note;
        })]
      }

    case POSTNOTES:
      console.log('postnotes reduser', state);
      return { ...state }

    case FETCHNOTES:
      return { ...state, fetchedPosts: action.payload }

    case REGISTRATION_REQUEST:
      return { ...state, loading: true }

    case REGISTRATION_REQUEST_FAILURE:
      return { ...state, }

    case REGISTRATION_REQUEST_SUCCESS:
      const pay = action.payload //ok
      return { ...state, pay }

    default:
      return state;
  }
}
