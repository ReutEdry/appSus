import { TrashNote } from "./TrashNote.jsx"
import { noteService } from "../services/noteService.service.js"
const { useState, useEffect } = React





export function NoteNav({ setNotes }) {
    const [isTrashOpen, setTrashOpen] = useState(false)

    // function onOpenTrash() {
    //     setTrashOpen(!isTrashOpen)
    // }

    function onSetNotes(val) {
        switch (val) {
            case 'deleted':
                noteService.getDeletedNotes()
                    .then(note => {
                        setNotes([note])
                    })
                break;
            case 'all':
                noteService.query()
                    .then(note => {
                        setNotes(note)
                    })
                break;
            default:
                break;
        }
    }

    return (
        <section className="sorting-container">
            <ul className="sorting-note-list">
                <li onClick={() => onSetNotes('all')}>
                    <i className="material-icons-outlined">
                        description
                    </i>
                    Your Notes
                </li>
                <li onClick={() => onSetNotes('deleted')} className="delete">
                    <i className="material-icons-outlined">
                        delete
                    </i>
                    {/* {isTrashOpen && <TrashNote />} */}
                    Trash
                </li>
            </ul>
        </section>
    )
}