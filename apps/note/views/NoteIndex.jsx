import { AddNote } from "../cmps/AddNote.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [pinneds, setPinned] = useState([])
    const [unPinneds, setUnPinned] = useState([])
    const [isPinned, setIsPinned] = useState(null)
    const [deleteNote, setDelete] = useState(null)


    useEffect(() => {
        noteService.query()
            .then(res => {
                setNotes(res)
            })
    }, [deleteNote, isPinned])

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

    if (!pinneds) return <div className="loading Pinned notes">loading Pinned notes</div>
    if (!unPinneds) return <div className="loading unPinned notes">loading unPinned notes</div>
    return (
        <section className="main-note-layout">
            // demo of sorting:
            <section className="notesList">
                <section className="add-note-are">
                    <AddNote setNotes={setNotes} notes={notes} />
                </section>
                <NoteList setNotes={setNotes} setIsPinned={setIsPinned} setDelete={setDelete} notes={pinneds} />
                <NoteList setNotes={setNotes} setIsPinned={setIsPinned} setDelete={setDelete} notes={unPinneds} />
            </section>
        </section>
    )
}


