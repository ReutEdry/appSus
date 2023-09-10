import { noteService } from "../services/noteService.service.js"

export function NoteNav({ setNotes }) {

    function onSetNotes(val) {
        switch (val) {
            case 'deleted':
                noteService.getDeletedNotes()
                    .then(notes => {
                        console.log(notes)
                        console.log('hey from else')
                        setNotes(notes)
                    })
                    .catch(error => {
                        console.error('Error fetching deleted notes:', error);
                    })
                break;
            case 'all':
                noteService.query()
                    .then(notes => {
                        setNotes(notes)
                    })
                    .catch(error => {
                        console.error('Error fetching all notes:', error);
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
                    Trash
                </li>
            </ul>
        </section>
    )
}