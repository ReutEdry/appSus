import { DynamicNote } from "../cmps/DynamicNote.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React


export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query()
            .then(setNotes)
    }, [])



    if (!notes) return <div className="loading notes"></div>
    return (
        <section className="note-container">
            <div>
                <NoteList notes={notes} />
            </div>
        </section>
    )
}


