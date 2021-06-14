import React, { useState, useEffect } from 'react';
import NoteList from '../src/components/NoteList';
// import WindowResise from '../src/components/WindowResise';
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

  const changeNoteText = (event, id) => {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.noteText = event.target.value;
      }
      return note;
    }));
  }

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

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  const deleteNoteRedux = (id) => {
    // store.dispatch(deleteNote(id));
  }

  const addTag = (tag, id) => {
    const newTag = { text: tag, id: Date.now() }
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.tags.push(newTag);
      }
      return note;
    }))
  }

  const deleteTag = (id) => {
    setNotes(notes.map(note => {
      note.tags = note.tags.filter(tag => tag.id !== id)
      return note;
    }))
  }

  return (
    <Context.Provider value={{
      deleteNote, changeNoteText, deleteTag, addTag
    }}>     
        <div className="App">
          <Header />
          <NoteList
            // notes={notes}
            setNotes={setNotes}
            addNewNote={addNewNote}
            deleteNoteRedux={deleteNoteRedux}
          />
        </div>
        {/* <WindowResise /> */}     
    </Context.Provider>
  );
}

export default App;
