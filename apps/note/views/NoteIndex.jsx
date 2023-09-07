import { DynamicNote } from "../cmps/DynamicNote.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [pinneds, setPinned] = useState([])
    const [unPinneds, setUnPinned] = useState([])
    const [deleteNote, setDelete] = useState(null)

    useEffect(() => {
        noteService.query()
            .then(res => {
                setNotes(res)
            })
    }, [deleteNote])

    useEffect(() => {
        const pinnedNotes = notes.filter(note => {
            return note.isPinned
        })
        setPinned(pinnedNotes)
    }, [notes])

    useEffect(() => {
        const UnpinnedNotes = notes.filter(note => {
            return !note.isPinned
        })
        setUnPinned(UnpinnedNotes)
    }, [notes])

    if (!pinneds) return <div className="loading Pinned notes"></div>
    if (!unPinneds) return <div className="loading unPinned notes"></div>
    return (
        <section className="noteArea">
            <h1>note list</h1>
            <section className="notesList">
                <NoteList setDelete={setDelete} notes={pinneds} />
                <NoteList setDelete={setDelete} notes={unPinneds} />
            </section>
        </section>
    )
}


