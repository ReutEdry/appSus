

export function NoteNav() {
    return (
        <section className="sorting-container">
            <ul className="sorting-note-list">
                <li>
                    <i class="material-icons-outlined">
                        description
                    </i>
                    Your Notes
                </li>
                <li className="delete">
                    <i class="material-icons-outlined">
                        delete
                    </i>
                    Trash
                </li>
            </ul>
        </section>
    )
}