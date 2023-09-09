import { AddNote } from "../cmps/AddNote.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteNav } from "../cmps/NoteNav.jsx"
import { SearchNoteFilter } from "../cmps/SearchNoteFilter.jsx"
import { noteService } from "../services/noteService.service.js"

const { useState, useEffect } = React
const { useParams } = ReactRouterDOM


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [pinneds, setPinned] = useState([])
    const [unPinneds, setUnPinned] = useState([])
    const [isPinned, setIsPinned] = useState(null)
    const [deleteNote, setDelete] = useState(null)
    const [isEmailNoteAdded, setEmailNoteAdded] = useState(false)
    const params = useParams()
    let isParamsNotFull = JSON.stringify(params) === JSON.stringify({})

    useEffect(() => {
        noteService.query()
            .then(res => {
                setNotes(res)
            })
    }, [deleteNote, isPinned, isEmailNoteAdded])

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

    useEffect(() => {
        if (params.mailTitle && params.mailBody) {
            noteService.makeNewNoteFromEmail(params)
                .then(res => {
                    const updatedNotes = [...notes, res]
                    setNotes(updatedNotes)
                    setEmailNoteAdded(true)
                })
        }
    }, [isParamsNotFull])

    if (!pinneds) return <div className="loading Pinned notes">loading Pinned notes</div>
    if (!unPinneds) return <div className="loading unPinned notes">loading unPinned notes</div>
    return (
        <section className="main-note-layout">
            <NoteNav />
            <header className="main-note-header">
                <article className="note-logo">
                    <img className="logo-note-img" src="https://logowik.com/content/uploads/images/google-keep3316.jpg" alt="" />
                    <span>Keep</span>
                </article>
                <SearchNoteFilter />
            </header>
            <section className="notesList">
                <section className="add-note-area">
                    <AddNote setNotes={setNotes} notes={notes} />
                </section>
                <NoteList setNotes={setNotes} setIsPinned={setIsPinned} setDelete={setDelete} notes={pinneds} />
                <NoteList setNotes={setNotes} setIsPinned={setIsPinned} setDelete={setDelete} notes={unPinneds} />
            </section>
        </section>
    )
}


