import React from "react";
import PropTypes from "prop-types";
import Note from "../Note";
import AddNote from "../AddNote";
// import { deleteNote } from '../../Redux/actions.js';
import "./index.css";
// import store from '../../Redux/store';

function NoteList({  notes,  addNoteText, addTag, setNotes, deleteNoteRedux,  addNewNote}) {
  const onInputTextChange = (event) => {
    console.log(event.target.value);
  };
 
  return (
    <>
      <div className="noteContainer">
        {notes.map((note, index) => (
          <Note
            key={note.id}
            note={note}
            index={index}
            addText={onInputTextChange}
            addTag={addTag}
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
