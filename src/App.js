// todo devExtreme gauge

import React, { useState, useEffect } from 'react';
import NoteList from '../src/components/NoteList';
//import FetchedNoteList from '../src/components/FetchedNoteList';
import { Context } from './context'
import './App.scss';
import Header from './components/Header';
import { WebSoc } from './components/WebSoc';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Charts from './components/Charts';

const LOCAL_STORAGE_KEY = 'react-list-notes';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    
  }, [notes]);

  return (
    <Router>
    <Context.Provider value={{}}>
        <div className="App">
          {/* <FetchedNoteList/> */}
          <Switch>
            <Route exact path="/websoc">
              <WebSoc/>
            </Route>
            <Route exact path="/">
              <Header />
              <NoteList setNotes={setNotes}/>
            </Route>
            <Route exact path="/charts">
            <Charts/>
            </Route>            
          </Switch>
        </div>
    </Context.Provider>
        </Router>  
  );
}

export default App;
