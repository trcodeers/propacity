import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteCard from './components/noteCard';
import NoteModal from './components/notesModal';



function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const onClickAddNote = () =>{
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={onClickAddNote} className='bg-red-100'>Add Notes</button>

      <NoteModal
        isOpen={modalOpen}
        formData={null}
        updateTask={null}
        onClose={closeModal}
      />

      <NoteCard
        title="THis is title"
        description="THis is a description"
      />
    </div>
  );
}

export default App;
