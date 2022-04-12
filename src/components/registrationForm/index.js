import React, { useEffect, useState } from "react";
import "./index.css"
import { connect } from 'react-redux'
import { registerUser } from '../../Redux/actions'
import { Redirect } from "react-router-dom";

function RegistrationForm({ registerUser, state }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentUserId, setCurrentUserId] = useState('')

  useEffect(() => {
    setCurrentUserId(state.id)
    console.log('effect state', state);
  }, [state]);
  
  const registerHandler = (event) => {
    event.preventDefault();
    const userRegistrationData = { name, email, password }
    registerUser(userRegistrationData)
  }

  return (
    <>
      <div>
        <form className="formcontainer">
          <div className="head">Register or enter in <a href="/notes">demo mode</a></div>
          <div >Name</div>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div>Email</div>
          <input
            type="text"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div>Password</div>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={(event) => registerHandler(event)}>Register</button>
        </form>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  registerUser
}

const mapStateToProps = state => {
  return { state }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)