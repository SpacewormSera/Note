import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

function Note({note, index, deleteNote, tags,  addTag,  changeNoteText}) {
// const [expressApi, setExpressApi] = useState({});

  function apiGet() {
    fetch("http://localhost:3003/testapi")
      .then((res) => {
        res.text();
      })
      .then((data) => {
        console.log("data>> ", data);
      });
  }

  return (
    <>
      <div className="card">
        <textarea
          onClick={() => {
            // console.log(index);
          }}
          onChange={(event) => {
            changeNoteText(event, note.id);
          }}
          onBlur={(event) => {
            console.log(event);
          }}
          className="textArea"
          placeholder="Type here"
          value={note.noteText}
        />
        <div className="tagContainer">
          <div>
            <input
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
            <button type="button" onClick={addTag}>
              Add
            </button>
          </div>
          <div className="tagArea">tags here </div>
        </div>
        <button type="button" className="button pin" onClick={() => apiGet()}>
          Pin
        </button>
        <button
          type="button"
          className="button"
          onClick={
            () => deleteNote(note.id)
          }
        >
          Delete
        </button>
      </div>
    </>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Note;
