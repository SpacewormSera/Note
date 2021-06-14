import {ADD_NOTE} from './types'

const initialState = {notes: [{ id: 777, noteText: 'redux is cool', tags:[] }, { id: 888, noteText: 'noooo', tags:[] }]}


export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, {id: Date.now(), noteText: '', tags:[]}] }
    case 'DELETE_NOTE':      
      return {...state, notes: []};
    default:
      return state
  }
}
