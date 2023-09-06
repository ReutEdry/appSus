import { DynamicNote } from "./DynamicNote.jsx"


export function NoteList({ notes }) {

    function onDeleteNote(noteId) {
        console.log(noteId)
    }

    return (
        <section>
            <h1>note list</h1>
            {
                notes.map(note => <section key={note.id}>
                    <DynamicNote id={note.id} type={note.type} info={note.info} />
                    <button onClick={() => onDeleteNote(note.id)}>delete</button>
                    <button>update</button>
                    <button>bgc color</button>
                    <button>pin</button>
                    <button>send to email</button>
                </section>
                )
            }
        </section>
    )
}
