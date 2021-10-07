import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList"
import Search from "./components/Search";

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

  const [searchText, setSearchText] = useState("");
  const [darkMood, setDarkMood] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    // const isDarkModeEnable = localStorage.getItem("dark-mode-enable");
    // setDarkMood(isDarkModeEnable);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
    // localStorage.setItem("dark-mode-enable", darkMood)
  }, [notes]);

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

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMood && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMood} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          key={notes.id}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
};
export default App;
