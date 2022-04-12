import React from 'react'
import {connect} from 'react-redux'
import './index.css'

function Header() {
  let chr = 'Search';
  return (
    <>
      <div className="header">
        {/* <div className="link">{chr}</div> */}
        {/* <input></input> */}
        {/* <button>Find</button> */}
      </div>
    </>
  );
}
export default connect(null, null)(Header);
