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
import { Notes } from "./types/notes";
import SearchBar from "./components/searchBar";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  
  const [notes, setNotes] = useState<Array<Notes>>([]);
  const [filteredNotes, setFilteredNotes] = useState<Array<Notes> | null>(null)

  const [noteToEdit, setNoteToEdit] = useState<Notes | null>(null);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onClickAddNote = (): void => {
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setNoteToEdit(null);
  };

  const onClickEdit = (data: Notes): void => {
    console.log("click edit", data);
    setNoteToEdit(data);
    setModalOpen(true);
  };

  const updateNote = (data: Notes): void => {
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

  const onClickDelete = (id: string): void => {
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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    console.log(e.target.value)
    const { value } = e.target
    if(!value){
      console.log('no val')
      setFilteredNotes(null)
      console.log(notes)
      return
    }


    const filteredNotes = notes.filter((el: any) => el.title.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredNotes)
    setFilteredNotes([ ...filteredNotes ])

  }

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
        <SearchBar
          onInputChange={onInputChange}
        />
      </div>

      <NoteModal
        isOpen={modalOpen}
        formData={noteToEdit}
        updateNote={updateNote}
        onClose={closeModal}
      />

      <div className="flex flex-wrap flex-row gap-4 justify-center mt-12 px-8">
        {(filteredNotes || notes).map((el: any, index: number) => {
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
