import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTES_KEY = 'notesDB'
const DELETED_NOTES = 'deletedNotesDB'
_createNotes()

export const noteService = {
    query,
    removeTodo,
    removeNote,
    settingIsPin,
    getNewNote,
    save,
    saveColorChange,
    makeNewNoteFromEmail,
    getDeletedNotes
}

function query() {
    return asyncStorageService.query(NOTES_KEY)
        .then(notes => { return notes })
}

function getDeletedNotes() {
    return asyncStorageService.query(DELETED_NOTES)
        .then(notes => { return notes })
}

function removeNote(noteId) {
    console.log(noteId)
    return asyncStorageService.get(NOTES_KEY, noteId)
        .then(note => {
            const deletedNotes = storageService.loadFromStorage(DELETED_NOTES) || []
            deletedNotes.push(note)
            storageService.saveToStorage(DELETED_NOTES, deletedNotes)
            return asyncStorageService.remove(NOTES_KEY, noteId)
        })
}

function settingIsPin(noteId) {
    return asyncStorageService.get(NOTES_KEY, noteId)
        .then(note => {
            note.isPinned = !note.isPinned
            return asyncStorageService.put(NOTES_KEY, note)
        })
        .catch(console.log)
}

function removeTodo(todoId, noteId) {
    return asyncStorageService.get(NOTES_KEY, noteId)
        .then(res => {
            const todos = res.info.todos
            const todoIdx = todos.findIndex(todo => todo.id === todoId)
            if (todoIdx !== -1) {
                todos.splice(todoIdx, 1)
                return asyncStorageService.put(NOTES_KEY, res)
            }
        })
}

function saveColorChange(note) {
    return asyncStorageService.put(NOTES_KEY, note)
}

function save(note) {
    if (note.id) {
        note.id = ''
        return asyncStorageService.post(NOTES_KEY, note)
    } else {
        return asyncStorageService.post(NOTES_KEY, note)
    }
}

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = getDemoData()
        storageService.saveToStorage(NOTES_KEY, notes)
    }
}

function getDemoData() {

    const notes = [
        {
            id: 'n101',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#b9b0b0'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: 'n112',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#d3bfdb'
            },
            info: {
                title: 'hello',
                txt: 'HEY'
            }
        },
        {
            id: 'n111',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#77aeae'
            },
            info: {
                title: 'should I woke up to CR?',
                txt: 'NO'
            }
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://loremflickr.com/cache/resized/65535_50623854921_872e491f0a_320_240_nofilter.jpg',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#ffffff'
            }
        },
        {
            id: 'n103',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { id: utilService.makeId(), txt: 'Driving license', doneAt: null },
                    { id: utilService.makeId(), txt: 'Coding power', doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: '#ffffff'
            },
        },
        {
            id: 'n104',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Things to do:',
                todos: [
                    { id: utilService.makeId(), txt: 'Eat', doneAt: null },
                    { id: utilService.makeId(), txt: 'Sleep', doneAt: 187111111 },
                    { id: utilService.makeId(), txt: 'Repeat', doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: '#e3e0cc'
            },
        },
        {
            id: 'n1022',
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://loremflickr.com/cache/resized/65535_52919863006_8ed0a8ca32_320_240_nofilter.jpg',
                title: 'Me and Nugets'
            },
            style: {
                backgroundColor: '#b5e7a0'
            }
        },
    ]

    return notes
}

function getNewNote() {
    return {
        id: '',
        type: 'NoteTxt',
        isPinned: false,
        info: {

        },
        style: {
            backgroundColor: '#ffffff'
        }
    }
}

function makeNewNoteFromEmail(noteFromEmail) {
    const newNote = getNewNote()
    newNote.info = { title: noteFromEmail.mailTitle, txt: noteFromEmail.mailBody }
    return asyncStorageService.post(NOTES_KEY, newNote)
}

