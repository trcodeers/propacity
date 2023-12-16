import { useEffect, useState } from "react";
import "./App.css";
import NoteCard from "./components/noteCard";
import NoteModal from "./components/notesFormModal";
import {
  createNewNote,
  getAllNotes,
  deleteNote,
  editNote,
} from "./services/notes";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onClickAddNote = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNoteToEdit(null);
  };

  const onClickEdit = (data: any) => {
    console.log("click edit", data);
    setNoteToEdit(data);
    setModalOpen(true);
  };

  const updateNote = (data: any) => {
    if (data.id) {
      console.log("update existing note", data);
      const res = editNote(data);
      setNotes(getAllNotes());
    } else {
      console.log("Create new note", data);
      const res = createNewNote(data);
      if (res) {
        setNotes(getAllNotes());
        enqueueSnackbar("Note created!", {
          autoHideDuration: 1000,
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      } else {
        console.log("Failed to create");
      }
    }
    setModalOpen(false);
  };

  const onClickDelete = (id: any) => {
    const res = deleteNote(id);
    if (res) {
      setNotes(getAllNotes());
      console.log("Deleted successfuly!");
      enqueueSnackbar("Deleted successfuly!", {
        autoHideDuration: 1000,
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } else {
      console.log("Failed to delete");
    }
  };

  return (
    <div className="App">
      <div className="text-center">
        <button
          onClick={onClickAddNote}
          className="bg-red-500 text-white font-semibold py-2 px-3 rounded-sm mt-5"
        >
          Add Note
        </button>
      </div>

      <div className="text-center mt-4">
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          placeholder="Search..."
        />
      </div>

      <NoteModal
        isOpen={modalOpen}
        formData={noteToEdit}
        updateNote={updateNote}
        onClose={closeModal}
      />

      <div className="flex flex-wrap flex-row gap-4 justify-center mt-12 px-8">
        {notes.map((el: any, index: number) => {
          const { title, description, id, color } = el;
          return (
            <NoteCard
              title={title}
              description={description}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              id={id}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
