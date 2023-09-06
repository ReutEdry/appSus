// mail service


const STORAGE_KEY = 'userDB'

export const mailService = {
    query,
    get,
    remove,
    save,
    getUser
}

const loggedinUser = {
    email: 'user@appsus.com', fullname: 'Mahatma Appsus'
}

const email = [
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


function getUser(){
    return loggedinUser
}

function query()  {

    return Promise.resolve(email)
}

function get(bookId) {
    return storageService.get(STORAGE_KEY, bookId)
        .then(book => {
            book = _setNextPrevBookId(book)
            return book
        })
}

function remove(bookId) {
    return storageService.remove(STORAGE_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(STORAGE_KEY, book)
    } else {
        return storageService.post(STORAGE_KEY, book)
    }
}