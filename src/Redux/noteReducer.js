import { combineReducers } from 'redux';
import noteListReducer from './noteListReducer';

const initialState = [{ id: 777, text: 'redux is cool' }, { id: 888, text: 'noooo' }];

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, text: action.payload }
    case 'DELETE_NOTE':
      console.log(state);
      const newState = state;
      delete newState['0'];
      return newState;
    default:
      return { ...state }
  }
}

export const rootReducer = combineReducers({ noteListReducer, noteReducer });