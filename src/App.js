
import React, { useState, useEffect } from 'react'
import NoteList from '../src/components/NoteList'
import { Context } from './context'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegistrationForm from './components/registrationForm'


const LOCAL_STORAGE_KEY = 'react-list-notes'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageNotes) {
      setNotes(storageNotes)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));

  }, [notes]);

  return (
    <Router>
      <Context.Provider value={{}}>
        <div className='App'>
          <Switch>

            <Route path="/signup">
              <RegistrationForm />
            </Route>

            <Route path="/notes">
              {/* <Header /> */}
              <NoteList setNotes={setNotes} />
            </Route>

          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
