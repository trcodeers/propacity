import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NoteCard from "./components/noteCard";
import NoteModal from "./components/notesFormModal";
import { createNewNote, getAllNotes } from "./services/notes";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onClickAddNote = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickEdit = () => {
    console.log("click edit");
  };

  const onClickDelete = () => {
    console.log("click delete");
  };

  const updateNote = (data: any) => {
    if (data.id) {
      console.log("update existing note", data);
    } else {
      console.log("Create new note", data);
      const res = createNewNote(data);
      if (res) {
        setNotes(getAllNotes());
      } else {
        console.log("Failed to create");
      }
    }
    setModalOpen(false)
  };

  const deleteNote = (id: any) =>{

  }

  return (
    <div className="App">
      <button onClick={onClickAddNote} className="bg-red-100">
        Add Notes
      </button>

      <NoteModal
        isOpen={modalOpen}
        formData={null}
        updateNote={updateNote}
        onClose={closeModal}
      />

      <div className="flex flex-wrap flex-row gap-4 justify-center mt-12">
        {notes.map((el: any, index: number) => {
          const { title, description, id } = el;
          return (
            <NoteCard
              title={title}
              description={description}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              noteId={id}
              id={title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
