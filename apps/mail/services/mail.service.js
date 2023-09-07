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
    markAsRead,
    getDefaultFilter
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
        from: 'Amazon',
        to: 'user@appsus.com'},
        {id: 'e103',
        subject: 'Your invoice from Apple',
        body: 'Apple Music Family Subscription',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Apple',
        to: 'user@appsus.com'},
        {id: 'e104',
        subject: 'Earn Interest at Interactive Brokers',
        body: 'How much interest is your broker paying you?',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Facebook',
        to: 'user@appsus.com'},
        {id: 'e105',
        subject: 'Earn Interest at Interactive Brokers',
        body: 'How much interest is your broker paying you?',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'IB',
        to: 'user@appsus.com'},
        {id: 'e106',
        subject: 'we noticed a new sign in to your Dropbox account',
        body: 'A new web browser just signed in to your Dropbox account. To help keep your account secure, let us know if this is you.',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Dropbox',
        to: 'user@appsus.com'},
        {id: 'e107',
        subject: 'Your Monthly payment',
        body: 'Your monthly payment for 25.7.23-25.8.23',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Pango',
        to: 'user@appsus.com'},
        {id: 'e108',
        subject: 'Your password was reset',
        body: 'We wanted to let you know that your GitHub password was reset. Please do not reply to this email with your password. We will never ask for your password, and we strongly discourage you from sharing it with anyone.',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Github',
        to: 'user@appsus.com'},
        {id: 'e109',
        subject: 'Earn Interest at Interactive Brokers',
        body: 'How much interest is your broker paying you?',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'Youtube',
        to: 'user@appsus.com'},
    ]
    return emails
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

function getDefaultFilter() {
    return { title: '' }
}