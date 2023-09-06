// mail service
import { storageService} from '../../../services/storage.service.js'
import { asyncStorageService} from '../../../services/async-storage.service.js'
const STORAGE_KEY = 'emailsDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getUser,
    markAsRead
}

const loggedinUser = {
    email: 'user@appsus.com', fullname: 'Mahatma Appsus'
}



function getDemoData(){
    const emails = [
        {id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'},
        {id: 'e102',
        subject: 'Sahar, youre eligible for business-only pricing',
        body: 'Sahar, are you shopping on Amazon for your business?',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'no-reply@business.amazon.com',
        to: 'user@appsus.com'},
        {id: 'e103',
        subject: 'Earn Interest at Interactive Brokers',
        body: 'How much interest is your broker paying you?',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'noresponse@interactivebrokers.com',
        to: 'user@appsus.com'},
    ]
    return emails
}

function getUser(){
    return loggedinUser
}

function query()  {
    return asyncStorageService.query(STORAGE_KEY)
        .then(mails => { return mails })
}


function _createMails(){
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    if (!mails || !mails.length) {
        mails = getDemoData()
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

function save(book) {
    if (book.id) {
        return storageService.put(STORAGE_KEY, book)
    } else {
        return storageService.post(STORAGE_KEY, book)
    }
}


function markAsRead(mailId, isReadStatus) {
    let mails = storageService.loadFromStorage(STORAGE_KEY)
    const mail = mails.find(mail => mail.id === mailId);
    mail.isRead = isReadStatus
    return asyncStorageService.put(STORAGE_KEY, mail)
}