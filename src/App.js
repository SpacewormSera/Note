import React, { useState, useEffect } from 'react';
import NoteList from '../src/components/NoteList';
import { Context } from './context'
import './App.scss';
import Header from './components/Header';

const LOCAL_STORAGE_KEY = 'react-list-notes';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    
  }, [notes]);

  const changeNoteText = (event, id) => {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.noteText = event.target.value;
      }
      return note;
    }));
  }

  // const addTag = (tag, id) => {
  //   const newTag = { text: tag, id: Date.now() }
  //   setNotes(notes.map(note => {
  //     if (note.id === id) {
  //       note.tags.push(newTag);
  //     }
  //     return note;
  //   }))
  // }

  // const deleteTag = (id) => {
  //   setNotes(notes.map(note => {
  //     note.tags = note.tags.filter(tag => tag.id !== id)
  //     return note;
  //   }))
  // }

  return (
    <Context.Provider value={{
      changeNoteText
    }}>     
        <div className="App">
          <Header />
          <NoteList
            setNotes={setNotes}
          />
        </div>    
    </Context.Provider>
  );
}

export default App;
