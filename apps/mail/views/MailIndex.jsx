const {useState,useEffect} = React
import { mailService } from '../services/mail.service.js';
import { MailList } from '../cmps/MailList.jsx';

export function MailIndex() {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        mailService.query()
            .then(mailsFromService => setMails(mailsFromService));
    }, [])

    if (!mails.length) return <div>Loading...</div>;

    return (
        <section className="mails-container">
            <MailList mails={mails} />
        </section>
    )
}

