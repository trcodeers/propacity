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

  const onClickEdit = () =>{
    console.log('click edit')
  }

  const onClickDelete = () =>{
    console.log('click delete')
  }

  return (
    <div className="App">
      <button onClick={onClickAddNote} className='bg-red-100'>Add Notes</button>

      <NoteModal
        isOpen={modalOpen}
        formData={null}
        updateTask={null}
        onClose={closeModal}
      />

    <div className='flex flex-row gap-4 justify-center mt-12'>
      <NoteCard
        title="THis is titlecccdcdcdddscdscdscsddsc"
        description="THis is afbnkjewbnfkjebfkjebfkjewbfjkebfjhef ejhf ejh fjehf ejhf ejhf ejhfe fhj fhjf efhj description"
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <NoteCard
        title="THis is titlecccdcdcdddscdscdscsddsc"
        description="THis is afbnkjewbnfkjebfkjebfkjewbfjkebfjhef ejhf ejh fjehf ejhf ejhf ejhfe fhj fhjf efhj description"
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>

    
    </div>
  );
}

export default App;
