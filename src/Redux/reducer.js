const initialState = {
  id: '',
  text: ''
}

export function noteReducer(state = initialState, action) {
  switch (action) {
    case 'ADD_NOTE':
      return { ...state, text: action.payload }
  }
}