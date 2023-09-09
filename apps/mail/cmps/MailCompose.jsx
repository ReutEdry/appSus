const {useState} =React
import { mailService } from "../services/mail.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js";

export function MailCompose({isComposeOpen}){
    const [closeControl, setControl] = useState(true)

   function sendEmail(ev){
        ev.preventDefault()
        console.log(ev.target.subject.value);
        const newMail = {
            subject: ev.target.subject.value,
            body: ev.target.body.value,
            to: ev.target.to.value
        }
        mailService.sentMailFormat(newMail)
        isComposeOpen(!closeControl)
        showSuccessMsg('Mail sent')
   }

    return (
        <section className="compose-modal">
            <form onSubmit={sendEmail}>
                <header className="compose-header">
                    <h1>New Message</h1>
                    <button className="compose-close-btn" onClick={isComposeOpen(closeControl)}><i className="fa-solid fa-x"></i></button>
                </header>
                <input name="to" type="text" placeholder="To:" />
                <input name="subject" type="text" placeholder="Subject" />
                <textarea name="body" id="" cols="50" rows="20"></textarea>
                <button className="submit-btn" >Send</button>
            </form>
        </section>
    )
}