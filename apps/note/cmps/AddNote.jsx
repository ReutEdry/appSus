import { noteService } from "../services/noteService.service.js"
const { useState, useEffect, useRef } = React

export function AddNote({ setNotes, notes }) {
    const [newNote, setNewNote] = useState(noteService.getNewNote())

    function onHandleChange({ target }) {
        const filed = target.name
        let value = target.value
        const settingInfo = { ...newNote.info }
        settingInfo[filed] = value

        setNewNote(prevNote => ({ ...prevNote, info: settingInfo }))
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        // noteService
        noteService.save(newNote)
            .then(res => setNotes([...notes, res]))
            .catch(err => console.log('err', err))


    }

    return (
        <form onSubmit={onSaveNote} className="add-note-form">
            <textarea onChange={onHandleChange} height="53px" name="title" id="title" cols="40" rows="1" placeholder="Title"></textarea>
            <textarea onChange={onHandleChange} name="txt" id="txt" cols="40" rows="2" placeholder="Your note"></textarea>
            <button className="save-form">Save</button>
        </form>
    )
}