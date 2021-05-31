import React from 'react';

import './index.css';

function AddNote({add}) {

  
  return (
    <>
      <div className="addCard">
        <button type="button" className="addButton" onClick={add}>ADD</button>
      </div>
    </>
  );
}

export default AddNote;
