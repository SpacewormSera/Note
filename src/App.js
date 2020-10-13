import React from 'react';
import NoteList from '../src/components/NoteList';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App background">
      <Header />
      <NoteList />
    </div>
  );
}

export default App;
