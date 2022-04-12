import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, setText, addTag, postNotes } from '../../Redux/actions'
import './index.css'

function Note({ note, deleteNote, setText }) {


  return (
    <>
      <div className="card">
        <textarea
          onChange={event => {
            setText(event.target.value, note.id);
            postNotes(event.target.value, note.id)
          }}
          className="textArea"
          placeholder="Type here"
          value={note.noteText}
        />
        {/* <button type="button" className="button pin">Pin</button> */}
        <button
          type="button"
          className="button"
          onClick={() => deleteNote(note.id)}
        > Delete
        </button>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  deleteNote, setText, addTag, postNotes
}

const mapStateToProps = state => {
  return { notes: state.notes.notes }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
