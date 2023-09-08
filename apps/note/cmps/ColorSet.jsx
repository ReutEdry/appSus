import { noteService } from '../services/noteService.service.js'

export function ColorSet({ setSelectedColor, isNewNoteAdd, newNote, isColorChanged, setIsColorChanged, index, notes }) {

    function onSetNoteColor(color) {
        if (isNewNoteAdd) {
            newNote.style.backgroundColor = color
            setSelectedColor(color)
        } else {
            notes[index].style.backgroundColor = color
            noteService.saveColorChange(notes[index])
                .then(res => setIsColorChanged(!isColorChanged))
        }
    }

    return (
        <div className="color-btn-container">
            <button onClick={() => onSetNoteColor('#e3e0cc')} className="color-btn yellow"></button>
            <button onClick={() => onSetNoteColor('#e4d1d1')} className="color-btn peach"></button>
            <button onClick={() => onSetNoteColor('#d3bfdb')} className="color-btn pink"></button>
            <button onClick={() => onSetNoteColor('#b9b0b0')} className="color-btn purple"></button>
            <button onClick={() => onSetNoteColor('#77aeae')} className="color-btn blue"></button>
            <button onClick={() => onSetNoteColor('#b5e7a0')} className="color-btn green"></button>
        </div>
    )
}