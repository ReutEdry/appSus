const {useState, useEffect} = React

import { MailPreview } from "./MailPreview.jsx"

import { utilService } from "../../../services/util.service.js";
import { UserMsg } from "../../../cmps/UserMsg.jsx";
import { mailService } from "../services/mail.service.js";

export function MailList({mails, onRemoveMail, onStarSelect}) {
    const [sortedMails, setSortedMail] = useState('')
    const [mailsToDisplay, setMailsToDisplay] = useState(mails)


    useEffect(() => {
        switch(sortedMails){
            case 'read':
                setMailsToDisplay(mails.filter(mail => mail.isRead))
                break;
            case 'unread':
                setMailsToDisplay(mails.filter(mail => !mail.isRead))
                break;
            default:
                setMailsToDisplay(mails)
        }
    }, [mails, sortedMails])

    

    
    function handleChange({target}){
        console.log('hey')
        // const field = target.name
        setSortedMail(target.value)  
    }

    


 


    return (
        <ul className="mails-list">
        <select id="mail-dropdown" onChange={(ev)=>handleChange(ev)}>
            <option value=""></option>
            <option name="read" value="read">Read</option>
            <option name="unread" value="unread">Unread</option>
        </select>
            {mailsToDisplay.map(mail => (
                <li className="mail" key={mail.id}>
                    <article className="mail-preview">
                            <span className='star' onClick={() => {onStarSelect(mail.id)}}>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </span>
                        <MailPreview key={mail.id} mail={mail} />
                        <button className="delete-btn" onClick={()=> {onRemoveMail(mail.id)}}><span><i className="material-icons-outlined">delete</i></span></button>
                    </article>
                </li>              
            ))}
        </ul>
    )
}

