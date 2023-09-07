import { noteService } from '../services/noteService.service.js'
import { DynamicNote } from "./DynamicNote.jsx"
const { useState, useEffect } = React

export function NoteList({ setIsPinned, setDelete, notes }) {
    const [notesToEdit, setNotesToEdit] = useState(notes)

    useEffect(() => {
        setDelete(notesToEdit)
    }, [notesToEdit])

    function onDeleteNote(noteId) {
        noteService.deleteNote(noteId)
            .then(() => {
                setNotesToEdit(prevNote =>
                    prevNote.filter(note => note.id !== noteId))
            })
            .catch(console.log)
    }

    function onPinNote(noteId) {
        noteService.settingIsPin(noteId)
            .then(note => setIsPinned(note.isPinned))
    }



    return (
        <section className="note-container">
            {
                notes.map(note => <section className={`note-self ${note.isPinned}`} key={note.id}>
                    <section className="noteChild">

                        <DynamicNote id={note.id} type={note.type} info={note.info} />
                        <section className="edit-note-area">
                            <button onClick={() => onDeleteNote(note.id)}>
                                <i className="material-icons-outlined">delete</i>
                            </button>
                            <button><i className="material-icons-outlined">
                                upgrade
                            </i></button>

                            <section className="note-bgc">
                                <input className="note-bgc-input" type="color" />
                                <i className="material-icons-outlined note-palette">
                                    palette
                                </i>
                            </section>
                            <button onClick={() => onPinNote(note.id)}>
                                <i className="material-icons-outlined">push_pin</i></button>
                            <button><i className="material-icons-outlined">
                                forward_to_inbox
                            </i></button>
                        </section>
                    </section>
                </section>
                )
            }
        </section>
    )
}
