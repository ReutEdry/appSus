import { MailPreview } from "./MailPreview.jsx";

import { utilService } from "../../../services/util.service.js";
import { UserMsg } from "../../../cmps/UserMsg.jsx";
import { mailService } from "../services/mail.service.js";

export function MailList({mails, onRemoveMail, onStarSelect}) {


    return (
        <ul className="mails-container">
            {mails.map(mail => (
                <li className="mail" key={mail.id}>
                    <span className='star' onClick={() => {onStarSelect(mail.id)}}>
                        <i className='fa-solid fa-star fa-lg'></i>
                    </span>
                <MailPreview key={mail.id} mail={mail} />
                <button onClick={()=> {onRemoveMail(mail.id)}}>Delete</button>
                </li>
                
            ))}
        </ul>
    );
}

