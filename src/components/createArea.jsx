import React, { useState } from 'react'

const createArea = (props) => {
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value,
            };
        });
    }

    const submitNote=(event)=>{
        props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
        event.preventDefault();
    }
    return (
    <div>
      <form>
        <input name='title' onChange={handleChange} value={note.title} placeholder='Enter title'></input>
        <textarea name='content' onChange={handleChange} value={note.content} placeholder='Take a note...' rows="5"/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}

export default createArea
