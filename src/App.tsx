import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoteCard from './components/noteCard';



function App() {

  const onClickAddNote = () =>{

  }

  return (
    <div className="App">
      <button onClick={onClickAddNote} className='bg-red-100'>Add Notes</button>
      <NoteCard
        title="THis is title"
        description="THis is a description"
      />
    </div>
  );
}

export default App;
