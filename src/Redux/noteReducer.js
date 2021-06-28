import {ADD_NOTE, DELETE_NOTE, SET_TEXT, ADD_TAG} from './types'

const initialState = {notes: [{ id: 777, noteText: 'redux is cool', tags:[] }, { id: 888, noteText: 'noooo', tags:[] }]};


export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, {id: Date.now(), noteText: '', tags:[]}] }
    case DELETE_NOTE:     
      return {...state, notes: state.notes.filter(element=>element.id !== action.payload)}
    case SET_TEXT:
      return {...state, notes: [...state.notes.map(note=>{
        if(note.id === action.payload.id){
          note.noteText = action.payload.text;
        }
        return note;
      })]}
      case ADD_TAG: 
      return {...state, notes: [...state.notes.map(note=>{
        if(note.id === action.payload.noteId){
          note.tags.push({id: Date.now(), text: action.payload.tagText});
        }
        return note;
      })]}
    default:
      return state
  }
}
