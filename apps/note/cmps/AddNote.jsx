import { noteService } from "../services/noteService.service.js"
import { ColorSet } from "./ColorSet.jsx"
const { useState, useRef, Fragment } = React

export function AddNote({ setNotes, notes }) {
    const [newNote, setNewNote] = useState(noteService.getNewNote())
    const [isColorForNewNoteReady, setIsColorForNewNoteReady] = useState(false)
    const [isNewNoteAdd, setNewNoteAdded] = useState(false)
    const [selectedColor, setSelectedColor] = useState('#ffffff')


    const titleTextareaRef = useRef(null)
    const txtTextareaRef = useRef(null)

    function onHandleChange({ target }) {
        const filed = target.name
        let value = target.value
        const settingInfo = { ...newNote.info }
        settingInfo[filed] = value

        setNewNote(prevNote => ({ ...prevNote, info: settingInfo }))
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(newNote)
            .then(res => {
                setNotes([...notes, res])
                titleTextareaRef.current.value = ''
                txtTextareaRef.current.value = ''
                setSelectedColor('#ffffff')
            })
            .catch(err => console.log('err', err))
        setNewNoteAdded(!isNewNoteAdd)
    }

    function toggleColorPalette(ev) {
        ev.preventDefault()
        setIsColorForNewNoteReady(!isColorForNewNoteReady)
        setNewNoteAdded(true)

    }
    return (
        <Fragment>
            <form onSubmit={onSaveNote} className="add-note-form">
                <textarea onClick={() => setNewNoteAdded(true)} style={{ backgroundColor: selectedColor }} ref={titleTextareaRef} onChange={onHandleChange} height="53px" name="title" id="title" cols="40" rows="1" placeholder="Title"></textarea>
                <textarea onClick={() => setNewNoteAdded(true)} style={{ backgroundColor: selectedColor }} ref={txtTextareaRef} onChange={onHandleChange} name="txt" id="txt" cols="40" rows="2" placeholder="Your note"></textarea>
                <button onClick={toggleColorPalette} className="note-bgc">
                    <i className="material-icons-outlined note-palette">
                        palette
                    </i>
                </button>
                <button className="save-form">Save</button>
            </form>
            {isColorForNewNoteReady && <ColorSet newNote={newNote} selectedColor={selectedColor}
                setSelectedColor={setSelectedColor} isNewNoteAdd={isNewNoteAdd} />}

        </Fragment>
    )
}