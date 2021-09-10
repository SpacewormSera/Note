import React from 'react';
import {connect} from 'react-redux'
import {} from '../../Redux/actions'
import './index.css';

function DashBoard() {
  

  return (
    <>
      <div className="addCard">
        <button type="button" className="addButton" >ADD</button>
      </div>
    </>
  );
}

// const mapDispatchToProps = {
//   addNote
// }

export default connect(null, {})(DashBoard);
