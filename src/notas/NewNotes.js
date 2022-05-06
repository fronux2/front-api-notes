import axios from "axios";
import { useState, useEffect } from "react";
import Notes from './Notes'
import { allNotes, createNote } from ".";
export default function NewNotes ()  {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        console.log('useEffect')
        allNotes().then(response => setNotes(response))
    },[])

    const handleChange = (event) => {
        const content = event.target.value
        setNewNote(content)
        

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const NoteAddContent = {             
            title: newNote,
            body: newNote,
            userId: 1 }
            
        createNote(NoteAddContent).then(response => setNotes(prevNotes => [...prevNotes, response]))
        setNewNote("");
    }

    const handleClick = () => {
        setShowAll(!showAll)
    }

    

    return (
        <div>
            <button onClick={handleClick}>{showAll ? 'Show All Notes' : 'Show Note Important'}</button>
            {
                notes
                .filter(note => { if(showAll === true) return true
                                 return note.important === true})
                .map(note => (
                    <Notes key={note.id} id={note.id} content={note.title}></Notes>
                ))
            }
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote}></input>
                <button>Guardar</button>
            </form>     
        </div>
    )
}