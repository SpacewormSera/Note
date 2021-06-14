import React from 'react'
import {connect} from 'react-redux'
import Note from '../Note'
import AddNote from '../AddNote'
import './index.scss'
// import store from '../../index';

const NoteList = ({notess,setNotes, addNewNote}) => { 
  return (
    <>
      <div className="noteContainer">
        {notess.map((note) => (
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


const mapStateToProps = state =>{
  return  {notess: state.notes.notes}
}

export default connect(mapStateToProps, null)(NoteList);
