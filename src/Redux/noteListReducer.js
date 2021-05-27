const initialState = [];

const noteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {}
    case 'DELETE_NOTE':
      console.log('delete');
      console.log(state);
      // return {
        // ...state,
        // justProp: state.filter(note => note.id !== action.payload)  //сюда передаем id удаляемого элемента
        console.log('delete reducer');
      const newState = state.filter(element => element.id !== action.payload);
      return newState;

      // }
    default: return state;
  }
}