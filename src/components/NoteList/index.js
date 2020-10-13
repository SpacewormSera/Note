import React, { useState } from 'react';
import Note from '../Note';
import AddNote from '../AddNote';
import './index.css';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNewNote = (event) => {
    // console.log('note added');
    setNotes([...notes,
    {
      id: Date.now(),
      noteText: noteText,
    }])
  }

  const onInputTextChange = (event) => {
    console.log(event.target.value);
    setNoteText([...noteText, event.target.value]);
    console.log(noteText);
  }


  return (
    <>
      <div className="noteContainer">{notes.map((item) => (
        <Note key={item.id} text={item.noteText} addText={onInputTextChange} />
      ))}
        <AddNote add={addNewNote} />
      </div>
    </>
  )
}

export default NoteList;
