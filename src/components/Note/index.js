import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Note({ noteObj, index, addNoteText, deleteNote, deleteNoteRedux, tags, addTag }) {

  const [note, setNote] = useState(noteObj);
  const [tag, setTag] = useState({});
  const [expressApi, setExpressApi] = useState({});

  function apiGet() {
    fetch('http://localhost:3003/testapi')
      .then(res => { res.text() })
      .then(data => {
        console.log('data>> ', data);
      })
  }
 
  function setNoteText(noteObj){
    // setNote({
    //   noteText: 'eba',
    // })

    console.log(note);
  }

  function addTag(event){
    setTag({
      tagText: event.target.value,
    })
  }

  return (
    <>
      <div className="card">        
        <textarea
          onClick={() => { console.log(index) }}
          onChange={(event)=>{setNote({
            noteText: event.target.value
          })}}
          className="textArea" placeholder="Type here"
          value={note.noteText}
        />
        <div className="tagContainer">
          <div>
            <input onChange={(event)=>{
              console.log(event.target.value);
            }}/>
            <button type="button" onClick={addTag}>Add</button>
          </div>
          <div className="tagArea">{expressApi.apiResponse}tags here </div>
        </div>
        <button type="button" className="button pin" onClick={() => apiGet()}>Pin</button>
        <button
          type="button"
          className="button"
          onClick={
            () => (deleteNote(noteObj.id))
            // () => deleteNoteRedux(777)
          }>
          Delete
        </button>
      </div>
    </>
  );
}

Note.propTypes = {
  noteObj: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default Note;
