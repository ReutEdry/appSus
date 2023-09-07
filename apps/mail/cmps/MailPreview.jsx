const {useState,useEffect } = React
const { Link } = ReactRouterDOM

import { utilService } from "../../../services/util.service.js";
import { UserMsg } from "../../../cmps/UserMsg.jsx";
import { mailService } from "../services/mail.service.js";


export function MailPreview({mail}) {
    const fullDate = utilService.formatDate(mail.sentAt)


    function handleMailClick(mailId,val){
        mailService.markAsRead(mailId,val)
            .then(mail => console.log(mail))
    }
    

    return (
        <Link className="mail-a-link" to={`/mail/${mail.id}`}>
            <section className={`email-item ${mail.isRead ? 'read' : ''}`} onClick={() => handleMailClick(mail.id,!mail.isRead) }>
                <div className="email-from">{mail.from}</div>
                <div className="email-subject">{mail.subject}</div>
                <div className="email-body-preview">{mail.body.slice(0, 50)}...</div>
                <div className="email-timestamp">{fullDate}</div>      
            </section>
        </Link>
    )
}