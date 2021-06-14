import React from 'react';
import {connect} from 'react-redux'
import {addNote} from '../../Redux/actions'
import './index.css';

function AddNote({addNote}) {
  function addHandler(){
    addNote();
  }

  return (
    <>
      <div className="addCard">
        <button type="button" className="addButton" onClick={addHandler}>ADD</button>
      </div>
    </>
  );
}

// const mapDispatchToProps = {
//   addNote
// }

export default connect(null, {addNote})(AddNote);
