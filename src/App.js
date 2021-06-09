import React, {useState, useEffect, useContext} from 'react';
import {Provider} from 'react-redux';
import NoteList from '../src/components/NoteList';
// import WindowResise from '../src/components/WindowResise';
import { Context } from './context'
import './App.css';
import Header from './components/Header';
import store from './Redux/store';

const LOCAL_STORAGE_KEY = 'react-list-notes';

function App() {
  const [notes, setNotes] = useState([]);

  const changeNoteText = (event, id)=> {
    setNotes(notes.map(note => {
      if(note.id === id){
        note.noteText = event.target.value;
      }
      return note
    }));
  }

  // get notes on page load
  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageNotes){
      setNotes(storageNotes);
    }
    console.log('notes get item local effect: ', storageNotes);
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
      tags: [],
    }]);
  }

  function addTag(tag, id){
    const newTag = {text: tag, id:Date.now()}
    setNotes(notes.map(note=>{
      if(note.id === id){
        note.tags.push(newTag);
      }
      return note;
    }))
  }

  const deleteTag = (id)=>{
    setNotes(notes.map(note=>{
      note.tags = note.tags.filter(tag=> tag.id !== id)
      return note;
    }))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  
  const deleteNoteRedux = (id) => {
    store.dispatch(deleteNote(id));
  }
  
  return (
    <Context.Provider value={{
      deleteNote, changeNoteText, deleteTag
    }}>
    <Provider store={store}>
      <div className="App">
        <Header />
        <NoteList 
        notes={notes} 
        setNotes={setNotes}
        addNewNote={addNewNote} 
        addTag={addTag}
        deleteNoteRedux={deleteNoteRedux}
        />
      </div>
      {/* <WindowResise /> */}
    </Provider >
    </Context.Provider>
  );
}

export default App;
