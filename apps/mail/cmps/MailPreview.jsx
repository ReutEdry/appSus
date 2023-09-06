import { utilService } from "../../../services/util.service.js";


export function MailPreview({mail}) {
    const fullDate = utilService.formatDate(mail.sentAt)

    return (
        <section className={`email-item ${!mail.isRead ? 'unread' : ''}`} onClick={() => {/* handle email click */}}>
            <div className="email-from">{mail.from}</div>
            <div className="email-subject">{mail.subject}</div>
            <div className="email-body-preview">{mail.body.slice(0, 50)}...</div>
            <div className="email-timestamp">{fullDate}</div>
        </section>
    )
}