import { DynamicNote } from "./DynamicNote.jsx"


export function NoteList({ notes }) {

    return (
        <section>
            <h1>note list</h1>
            {
                notes.map(note => <section key={note.id}>
                    <DynamicNote id={note.id} type={note.type} info={note.info} />
                </section>
                )
            }
        </section>
    )
}
