import { noteService } from '../services/noteService.service.js'
import { DynamicNote } from "./DynamicNote.jsx"
const { useState, useEffect } = React

export function NoteList({ setDelete, notes }) {
    const [notess, setNotes] = useState(notes)

    useEffect(() => {
        setDelete(notess)
    }, [notess])

    function onDeleteNote(noteId) {
        noteService.deleteNote(noteId)
            .then(() => {
                setNotes(prevNote =>
                    prevNote.filter(note => note.id !== noteId))
            })
            .catch(err => {
                console.log('err', err)
            })
    }

    return (
        <section className="note-container">
            {

                notes.map(note => <section className={`noteSelf ${note.isPinned}`} key={note.id}>
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

                            <button>
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
