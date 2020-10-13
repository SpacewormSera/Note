import React, { useState } from 'react';
import './index.css';

function Note({ text, addText }) {

  const [noteText, setNoteText] = useState('');
  // function onInputTextChange(event) {
  //   console.log(event.target.value);
  //   setNoteText(event.target.value);
  // }

  return (
    <>
      <div className="card">
        <textarea className="textArea" placeholder="Type here" onChange={addText} value={text} />
        <button type="button" className="button pin">Pin</button>
        <button type="button" className="button">Delete</button>
      </div>
    </>
  );
}

export default Note;
