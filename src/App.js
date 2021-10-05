import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "12/02/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "12/02/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "12/02/2021"
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "12/02/2021"
    },
    {
      id: nanoid(),
      text: "This is my fifth note",
      date: "12/02/2021"
    },
  ]);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleTimeString()
    }
    const allNotes = [...notes, newNote];
    setNotes(allNotes);
  }

  return (
    <div className="container">
      <NotesList key={notes.id} notes={notes} handleAddNote={handleAddNote} />
    </div>
  );
};
export default App;
