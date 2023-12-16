import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteCard from './components/noteCard';
import NoteModal from './components/notesFormModal';



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

  const updateNote = (data: any) =>{
    if(data.id){
      console.log('update existing note', data)
    }
    else{
      console.log('Create new note', data)
    }
  }

  return (
    <div className="App">
      <button onClick={onClickAddNote} className='bg-red-100'>Add Notes</button>

      <NoteModal
        isOpen={modalOpen}
        formData={null}
        updateNote={updateNote}
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
