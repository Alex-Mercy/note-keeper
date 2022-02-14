import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(()=> {
      return notes.filter((note, index)=>{
        return id!== index
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index )=> 
      <Note 
      title={note.title} 
      content={note.content}
      deleteNote={deleteNote}
      key={index}
      id={index}
      />)}
      <Footer />
    </div>
  );
}

export default App;
