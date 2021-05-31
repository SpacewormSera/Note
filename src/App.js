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

  function changeNoteText(event, id) {
    setNotes(notes.map(note => {
      if(note.id === id){
        note.noteText = event.target.value;
        console.log('-->', notes);
      }
      return note
    }));
  }

  // get notes on page load
  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageNotes){
      setNotes(storageNotes);
      console.log(storageNotes);
    }
    console.log('notes get item local effect');
  }, []);

  // save notes on each change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNewNote = () => {
    setNotes([...notes,
    {
      id: Date.now(),
      noteText: '',
      tags: [''],
    }]);
  }

  function addTag(tag, id){
    setNotes(notes.map(note=>{
      if(note.id === id){
        // console.log('addTag: ', tag);
        note.tags = tag[0]

      }
      console.log('note: ', note);
      return note;
    }))
    // console.log('tag added to note: ' + id);
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
        <NoteList 
        notes={notes} 
        setNotes={setNotes} 
        deleteNote={deleteNote} 
        addNewNote={addNewNote} 
        addTag={addTag}
        deleteNoteRedux={deleteNoteRedux}
        changeNoteText={changeNoteText}
        />
      </div>
      {/* <WindowResise /> */}
    </Provider >
  );
}

export default App;
