// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState } from "react"
import Heading from "./heading"
import Footer from "./footer"
import Note from "./note"
import CreateArea from "./createArea"
import { Toaster,toast } from "react-hot-toast"

function App() {
const [notes,setNotes]=useState([]);
  function addNote(newNote){
    {!newNote.content?toast.error("Enter note to add"):setNotes(prevNotes=>{
      return [...prevNotes,newNote];
     })}
    
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
     return prevNotes.filter((noteItem,index)=>{
        return index !==id;
      })
     })
  }
  return (
    <>
      <Heading />
      <CreateArea  onAdd={addNote}/>
    { notes.map((noteItem,index)=>{
    return <Note 
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete={deleteNote}
    />
  })}
      <Footer />
      <Toaster/>
    </>
  )
}

export default App
