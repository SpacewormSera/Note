import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {fetchNotes} from '../../Redux/actions'
import Note from '../Note'
import AddNote from '../AddNote'
import './index.scss'

const FetchedNoteList = ({notes,setNotes, addNewNote}) => { 
  const dispatch = useDispatch();
  const fetchedNotes = useSelector(state=> state.notes.fetchedNotes);
  // if(!notes.length){
    
  // }
  return (
    <>
    return <button 
    className=""
    onClick={()=>{dispatch(fetchNotes())}}
    >Load</button>
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

const mapStateToProps = state =>{
  return  {notes: state.notes.fetchedNotes}
}

export default connect(mapStateToProps, null)(FetchedNoteList);
