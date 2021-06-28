import React, {useState} from 'react'
import {connect} from 'react-redux'
import {deleteNote, setText, addTag} from '../../Redux/actions'
import Tag from '../Tag'
import './index.scss'

function Note({note, deleteNote, setText, addTag}) {
const [tagValue, setTagValue] = useState('');
  function apiGet() {
    // fetch("http://localhost:3003/testapi")
    //   .then((res) => {
    //     res.text();
    //   })
    //   .then((data) => {
    //     console.log("data>> ", data);
    //   });
    console.log('pinned');
  }

  function tagSubmitHandler(event){
    event.preventDefault();
    if(tagValue){
      addTag(tagValue, note.id);      
    }
    setTagValue('');
  }

  return (
    <>
      <div className="card">
        <textarea
          onChange={event => {setText(event.target.value, note.id)}}
          className="textArea"
          placeholder="Type here"
          value={note.noteText}
        />
        {/* ============================== tag container ============================== */}
        <div className="tagContainer">
          <div>
            <form
              onSubmit={tagSubmitHandler}>
              <input value={tagValue} placeholder="Add tag" onChange={event=>setTagValue(event.target.value)}/>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="tagArea">{note.tags.map(tag=>(<Tag tag={tag} key={tag.id}/>))}</div>          
        </div>
        <button type="button" className="button pin" onClick={() => apiGet()}>Pin</button>
        <button
          type="button"
          className="button"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  deleteNote, setText, addTag
}

const mapStateToProps = state =>{
  return  {notes: state.notes.notes}
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
