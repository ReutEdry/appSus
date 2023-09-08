const { useState, useEffect } = React
import { mailService } from "../services/mail.service.js"
import { MailCompose } from "./MailCompose.jsx"


export function MailSorting({ toggleToolBar, setMails }) {
    const [setActive, onSetActive] = useState(null)
    const [setCompose, isComposeOpen] = useState(false)


    function onSetMails(val) {
        let mails
        switch (val) {
            case 'deleted':
                mails = mailService.getDeletedMails()
                setMails(mails)
                onSetActive(val)
                break;
            case 'inbox':
                mails = mailService.query()
                    .then(mails => setMails(mails));
                onSetActive(val)
                break;
            case 'starred':
                mails = mailService.getStarredMails()
                setMails(mails)
                onSetActive(val)
                break;
            case 'sent':
                mails = mailService.getSentMails()
                setMails(mails)
                onSetActive(val)
            default:
                break;
        }
    }
    
    function onClickCompose(){
        isComposeOpen(!setCompose)
        console.log('here'); 
    }

    return ( 
        <section className='sorting-container'>
            {setCompose && <MailCompose isComposeOpen={isComposeOpen} />}
            <ul className="sorting-list">
            <li className="compose" onClick={onClickCompose}>
                <span class="material-symbols-outlined">
                    edit
                </span>
                {!toggleToolBar && "Compose" }
            </li>         
            <li className={setActive === 'inbox' ? 'active' : ''} onClick={() => onSetMails('inbox')}>
                <span class="material-symbols-outlined">
                    inbox
                </span>
                {!toggleToolBar && "Inbox"}
            </li>
            <li className={setActive === 'starred' ? 'active' : ''} onClick={() => onSetMails('starred')}>
                <span class="material-symbols-outlined">
                    star
                </span>
                {!toggleToolBar && "Starred"}
            </li>
            <li className={setActive === 'sent' ? 'active' : ''} onClick={() => onSetMails('sent')}>
            <span class="material-symbols-outlined">
                send
            </span>  
                {!toggleToolBar && "Sent"}
            </li>
            <li className={setActive === 'deleted' ? 'active' : ''} onClick={() => onSetMails('deleted')}>
            <span class="material-symbols-outlined">
                delete
            </span>
                {!toggleToolBar && "Trash"}
            </li>
            </ul>
        </section>
    )
}