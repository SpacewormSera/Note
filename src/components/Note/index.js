import React, {useState} from "react";
import PropTypes from "prop-types";
import "./index.css";

function Note({note, index, deleteNote, tags,  addTag,  changeNoteText}) {
// const [expressApi, setExpressApi] = useState({});
const [tagValue, setTagValue] = useState(['']);
  function apiGet() {
    fetch("http://localhost:3003/testapi")
      .then((res) => {
        res.text();
      })
      .then((data) => {
        console.log("data>> ", data);
      });
  }

  // onl
  function submitHandler(value){
    if(value){
      addTag(value, note.id);
      // console.log('submitHandler: ', value);
    }
  }
  return (
    <>
      <div className="card">
        <textarea          
          onChange={event => {changeNoteText(event, note.id)}}
          className="textArea"
          placeholder="Type here"
          value={note.noteText}
        />
        <div className="tagContainer">
          <div>
            <form
              onChange={(event) => {setTagValue([event.target.value])}}
              onSubmit={event=>{ 
                event.preventDefault();
                //===========================================================================================
                submitHandler(tagValue);
              }}>
              <input value={tagValue} onChange={event=>{setTagValue(event.target.value)}}/>
            <button type="submit" onClick={(event)=>addTag(event, note.id)}>
              Add
            </button>
              </form>
          </div>
          <div className="tagArea" >tags here {note.tags} </div>
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
  addTag: PropTypes.func.isRequired
};

export default Note;
