import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTES_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    removeTodo,
    deleteNote,
    settingIsPin,
    getNewNote,
    save
}

function query() {
    return asyncStorageService.query(NOTES_KEY)
        .then(notes => { return notes })
}

function deleteNote(noteId) {
    return asyncStorageService.remove(NOTES_KEY, noteId)
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

function save(note) {
    // if (note.id) {
    //     return storageService.put(BOOK_KEY, note)
    // } else {
    return asyncStorageService.post(NOTES_KEY, note)
    // }
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
                backgroundColor: '#00d'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://loremflickr.com/g/320/240/paris,girl/all',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#00d'
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
            }
        }
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
            backgroundColor: '#00d'
        }
    }
}

