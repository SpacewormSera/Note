export function addNote(text) {
  return {
    type: 'ADD_NOTE',
    payload: text
  };
}
