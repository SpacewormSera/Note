import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note';
import AddNote from '../AddNote';
// import { deleteNote } from '../../Redux/actions.js';
import './index.css';
// import store from '../../Redux/store';

function NoteList({notes, addNoteText, setNotes, deleteNote, deleteNoteRedux, addNewNote}) { 

  const onInputTextChange = (event) => {
    // const noteToEdit = notes.find(note => note.id === id);
    // console.log(noteToEdit);
    console.log(event.target.value);
  }

  return (
    <>
      <div className="noteContainer">{notes.map((item, index) => (
        <Note 
        key={item.id} 
        noteObj={item} 
        index={index} 
        addText={onInputTextChange} 
        deleteNote={deleteNote} 
        deleteNoteRedux={deleteNoteRedux}
        addNoteText={addNoteText} />
      ))}
        <AddNote add={addNewNote} setNotes={setNotes}/>
      </div>
    </>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array
}

export default NoteList;
