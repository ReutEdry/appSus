import { MailPreview } from "./MailPreview.jsx";

export function MailList({mails}) {
    return (
        <div className="mails-container">
            {mails.map(mail => (
                <MailPreview key={mail.id} mail={mail} />
            ))}
        </div>
    );
}

