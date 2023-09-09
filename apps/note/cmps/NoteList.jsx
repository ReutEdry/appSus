import { noteService } from '../services/noteService.service.js'
import { ColorSet } from './ColorSet.jsx'
import { DynamicNote } from "./DynamicNote.jsx"
import { NoteEdit } from './NoteEdit.jsx'
const { useState, useEffect } = React
const { Link } = ReactRouterDOM


export function NoteList({ setNotes, setIsPinned, setDelete, notes }) {
    const [notesToEdit, setNotesToEdit] = useState(notes)
    const [isColorChanged, setIsColorChanged] = useState(false)
    const [colorOptions, setColorOptions] = useState(Array(notes.length).fill(false))
    const [isDuplicate, setDuplication] = useState(false)
    const [isModaEditlOpen, setModalEditing] = useState(false)

    useEffect(() => {
        noteService.query(notes)
            .then(setNotes)
    }, [isColorChanged])

    useEffect(() => {
        noteService.query(notes).then(setNotes)
        setDuplication(false)
    }, [isDuplicate])

    useEffect(() => {
        setDelete(notesToEdit)
    }, [notesToEdit])

    function onRemoveNote(noteId) {
        noteService.removeNote(noteId)
            .then(() => {
                setNotesToEdit(prevNote =>
                    prevNote.filter(note => note.id !== noteId))
            })
            .catch(console.log)
    }

    function onPinNote(noteId) {
        noteService.settingIsPin(noteId)
            .then(note => setIsPinned(note.isPinned))
            .catch(err => console.log('err:', err))
    }

    function onToggleColorDisplay(index) {
        const newColorOptions = [...colorOptions]
        newColorOptions[index] = !newColorOptions[index]
        setColorOptions(newColorOptions)
    }

    function onDuplicateNote(note) {
        console.log(note)
        console.log(isDuplicate)
        noteService.save(note)
            .then(res => {
                notes.push(res)
                setDuplication(true)
            })

    }

    function onOpenUpdateModal() {
        setModalEditing(!isModaEditlOpen)
    }
    
    return (
        <section className="note-container">
            {
                notes.map((note, idx) => <section style={{ backgroundColor: note.style.backgroundColor }} className={`note-self ${note.isPinned}`} key={note.id}>
                    <section className="noteChild">
                        <DynamicNote id={note.id} type={note.type} info={note.info} />
                        <section className="edit-note-area">
                            <button onClick={() => onRemoveNote(note.id)}>
                                <i className="material-icons-outlined">delete</i>
                            </button>
                            <button title="update" onClick={onOpenUpdateModal}>

                                <i class="material-symbols-outlined">
                                    edit_note
                                </i>
                            </button>
                            <button onClick={() => onPinNote(note.id)}>
                                <i className="material-icons-outlined">push_pin</i></button>
                            <button onClick={() => onToggleColorDisplay(idx)} className="note-bgc">
                                <i className="material-icons-outlined note-palette">
                                    palette
                                </i>
                            </button>
                            <button onClick={() => onDuplicateNote(note)}><i className="material-icons-outlined">
                                content_copy
                            </i></button>

                            <button><Link to={`/mail/${note.info.txt}/${note.info.title}`}><i className="material-icons-outlined">
                                forward_to_inbox
                            </i></Link></button>
                        </section>
                    </section>
                    {isModaEditlOpen && <NoteEdit />}
                    {colorOptions[idx] &&
                        <ColorSet isColorChanged={isColorChanged} setIsColorChanged={setIsColorChanged} index={idx} notes={notes} />
                    }
                </section>
                )
            }
        </section >
    )
}
