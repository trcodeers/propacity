import { useEffect, useState } from "react";
import "./App.css";
import NoteCard from "./components/noteCard";
import NoteModal from "./components/notesFormModal";
import { createNewNote, getAllNotes, deleteNote } from "./services/notes";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const [noteToEdit, setNoteToEdit] = useState(null)

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onClickAddNote = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickEdit = (data: any) => {
    console.log("click edit", data);
    setNoteToEdit(data)
    setModalOpen(true)

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

  const onClickDelete = (id: any) =>{
    const res = deleteNote(id)
    if(res) {
      setNotes(getAllNotes());
      console.log('Deleted successfuly!')
    }
    else{
      console.log('Failed to delete')
    }
  }

  return (
    <div className="App">
      <button onClick={onClickAddNote} className="bg-red-100">
        Add Notes
      </button>

      <NoteModal
        isOpen={modalOpen}
        formData={noteToEdit}
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
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
