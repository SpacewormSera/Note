import React from "react";
import PropTypes from "prop-types";
import Note from "../Note";
import AddNote from "../AddNote";
// import { deleteNote } from '../../Redux/actions.js';
import "./index.css";
// import store from '../../Redux/store';

function NoteList({  notes,  addNoteText,  setNotes,  deleteNote,  deleteNoteRedux,  addNewNote, changeNoteText}) {
  const onInputTextChange = (event) => {
    console.log(event.target.value);
  };
 
  return (
    <>
      <div className="noteContainer">
        {notes.map((item, index) => (
          <Note
            key={item.id}
            note={item}
            index={index}
            addText={onInputTextChange}
            changeNoteText={changeNoteText}
            deleteNote={deleteNote}
            deleteNoteRedux={deleteNoteRedux}
            addNoteText={addNoteText}
          />
        ))}
        <AddNote add={addNewNote} setNotes={setNotes} />
      </div>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
};

export default NoteList;
