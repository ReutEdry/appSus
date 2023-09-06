const {useState,useEffect} = React
import { mailService } from '../services/mail.service.js';
import { MailList } from '../cmps/MailList.jsx';

export function MailIndex() {
    const [mails, setMails] = useState([]);


    useEffect(() => {
        mailService.query()
            .then(mailsFromService => setMails(mailsFromService));
    }, [])

    function onStarSelect(mailId){
        console.log(mailId);
        console.log(mails);
    }



    function onRemoveMail(mailId){
        console.log(mailId);
        mailService.remove(mailId)
            .then(() => {setMails(prevMail => 
                prevMail.filter(mail => mail.id !== mailId))
                UserMsg.showSuccessMsg(`Book removed ${mailId}`)
            })
            .catch(err=> console.log('err', err))     
    }

    if (!mails.length) return <div>Loading...</div>;
    return (
        <section className="mails-container">
            <MailList mails={mails} onRemoveMail={onRemoveMail} onStarSelect={onStarSelect} />
        </section>
    )
}

