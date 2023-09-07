import { MailPreview } from "./MailPreview.jsx";

import { utilService } from "../../../services/util.service.js";
import { UserMsg } from "../../../cmps/UserMsg.jsx";
import { mailService } from "../services/mail.service.js";

export function MailList({mails, onRemoveMail, onStarSelect}) {


    return (
        <ul className="mails-list">
            {mails.map(mail => (
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

