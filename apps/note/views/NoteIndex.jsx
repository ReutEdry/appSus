import { DynamicNote } from "../cmps/DynamicNote.jsx"
import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    // const []/
    useEffect(() => {
        noteService.query()
            .then(setNotes)
    }, [])


    console.log('notes', notes)
    if (!notes) return <div className="loading notes"></div>
    return (

        <div>
            <DynamicNote />
        </div>

    )
}


