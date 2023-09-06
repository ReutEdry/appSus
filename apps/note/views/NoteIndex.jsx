import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React


export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query()
            .then(setNotes)
    }, [])


    console.log('notes', notes)
    if (!notes) return <div className="loading notes"></div>
    return (

        <div>note app</div>
    )
}
