import React from 'react'
import {connect} from 'react-redux'
import './index.scss'

function Header() {

  return (
    <>
      <div className="header">
        <div className="link">Search</div>
        <input></input>
        <button>Find</button>
      </div>
    </>
  );
}
export default connect(null, null)(Header);
