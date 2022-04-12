import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes } from '../../Redux/actions'
import Note from '../Note'
import AddNote from '../AddNote'
import './index.css'

const NoteList = ({ notes, setNotes, addNewNote }) => {

  useEffect(() => {
    fetchNotes()
  }, [])
  
  const authSuccessful = true

  if (!authSuccessful) {return <Redirect to='/signup' />}


  return (
    <>
      <div className="noteContainer">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
          />
        ))}
        <AddNote add={addNewNote} setNotes={setNotes} />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return { notes: state.notes.notes }
}

const mapDispatchToProps = {
  fetchNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
