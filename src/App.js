import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import NoteList from '../src/components/NoteList';
// import WindowResise from '../src/components/WindowResise';
import './App.css';
import Header from './components/Header';
import store from './Redux/store';

const LOCAL_STORAGE_KEY = 'react-list-notes';

function App() {
  const [notes, setNotes] = useState([]);

  // get the notes on load
  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageNotes){
      setNotes(storageNotes);
      console.log(storageNotes);
    }
    console.log('notes get item local effect');
  }, []);

  useEffect(() => {
    // const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    console.log('notes set item from local storage effect');
  }, [notes]);

  function addNoteText(id){
    console.log('addnotetext');
    // setNotes(
      // notes.map(note=>{
        // if(note.id === id){
        //   note.noteText = 'oops'
        // }
      // })
    // )
  }

  const addNewNote = () => {
    setNotes([...notes,
    {
      id: Date.now(),
      noteText: '',
      tags: [''],
    }])
    console.log(notes);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  
  const deleteNoteRedux = (id) => {
    store.dispatch(deleteNote(id));
  }
  
  return (
    <Provider store={store}>
      <div className="App background">
        <Header />
        <NoteList notes={notes} addNoteText={addNoteText} setNotes={setNotes} deleteNote={deleteNote} addNewNote={addNewNote} deleteNoteRedux={deleteNoteRedux}/>
      </div>
      {/* <WindowResise /> */}
    </Provider >
  );
}

export default App;
