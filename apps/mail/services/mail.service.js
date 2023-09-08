// mail service
import { storageService} from '../../../services/storage.service.js'
import { asyncStorageService} from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
const STORAGE_KEY = 'emailsDB'
_createMails()
const DELETED_MAILS_KEY = 'deletedMailsDB'

export const mailService = {
    query,
    get,
    remove,
    save,
    getUser,
    markAsRead,
    getDefaultFilter,
    getEmptyMail,
    saveDeletedMail,
    getDeletedMails,
    markAsStar,
    getStarredMails
}

const loggedinUser = {
    email: 'user@appsus.com', fullname: 'Mahatma Appsus'
}

function getUser(){
    return loggedinUser
}

function query(filterBy)  {
    console.log('filterBy:', filterBy)
    return asyncStorageService.query(STORAGE_KEY)
        .then(mails => { 
            if(filterBy){
                const regExp = new RegExp(filterBy.search, 'i')
                mails = mails.filter(mail => regExp.test(mail.from))
            }
            return mails
         })
}

function getDefaultFilter() {
    return { search:'' }
}

function _createMails(){
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('Dropbox', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Google', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(100), utilService.formatDate(Date.now())))
        mails.push(_createMail('Dropbox',utilService.makeLorem(utilService.getRandomIntInclusive(3,7)), utilService.makeLorem(50), utilService.formatDate(Date.now())))
        mails.push(_createMail('YouTube', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(60), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Apple', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('YouTube', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)), utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(60), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Apple', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('YouTube', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(60), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Apple', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Facebook', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        mails.push(_createMail('Amazon', utilService.makeLorem(utilService.getRandomIntInclusive(3,7)),utilService.makeLorem(20), utilService.formatDate(Date.now())))
        storageService.saveToStorage(STORAGE_KEY, mails)
    }
}

function get(id) {
    return asyncStorageService.get(STORAGE_KEY, id)
}

function remove(mailId) {
    console.log('mailId:', mailId)
    return asyncStorageService.remove(STORAGE_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(STORAGE_KEY, mail)
    } else {
        return asyncStorageService.post(STORAGE_KEY, mail)
    }
}

function markAsRead(mailId, isReadStatus) {
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    const mail = mails.find(mail => mail.id === mailId);
    mail.isRead = isReadStatus
    return asyncStorageService.put(STORAGE_KEY, mail)
}

function markAsStar(mailId){
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    const mail = mails.find(mail => mail.id === mailId )
    mail.isStar = !mail.isStar
    console.log('mail:', mail)
    return asyncStorageService.put(STORAGE_KEY,mail)
}

function getDefaultFilter() {
    return { title: '' }
}


function _createMail(from ,subject, body, sentAt) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: (Math.random() > 0.4),
        isStar: (Math.random() > 0.8),
        sentAt,
        removedAt: null,
        from,
        to: 'user@appsus.com'
    }
}

function getEmptyMail() {
    return {
        subject: '',
        body: '',
        isRead: false,
        sentAt: null,
        removedAt: null,
        from: '',
        to: ''
    }
}

function saveDeletedMail(mailId) {
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    const mail = mails.find(mail => mail.id === mailId);
    return asyncStorageService.post(DELETED_MAILS_KEY, mail)
}

function getDeletedMails(){
    const mails = storageService.loadFromStorage(DELETED_MAILS_KEY)
    console.log('mails:', mails)
    return mails
}

function getStarredMails(){
    const mails = storageService.loadFromStorage(STORAGE_KEY)
    const starredMails = mails.filter(mail => mail.isStar)
    console.log('starredMails:', starredMails)
    return starredMails
}