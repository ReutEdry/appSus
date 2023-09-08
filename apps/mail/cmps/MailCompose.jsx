const {useState,useRef} =React
import { mailService } from "../services/mail.service.js"
export function MailCompose({isComposeOpen}){
    const [closeControl, setControl] = useState(true)

    
   function onSetCompose(){
        isComposeOpen(closeControl)
   }

   function sendEmail(ev){
        ev.preventDefault()
        console.log(ev.target.subject.value);
        const newMail = {
            subject: ev.target.subject.value,
            body: ev.target.body.value,
            to: ev.target.to.value
        }
        mailService.sentMailFormat(newMail)
   }

    return (
        <section className="compose-modal">
            <form onSubmit={sendEmail}>
                <header className="compose-header">
                    <h1>New Message</h1>
                    <button className="compose-close-btn" onClick={onSetCompose}><i class="fa-solid fa-x"></i></button>
                </header>
                <input name="to" required type="text" placeholder="To:" />
                <input name="subject" required type="text" placeholder="Subject" />
                <textarea name="body" required  id="" cols="50" rows="20"></textarea>
                <button className="submit-btn">Send</button>
            </form>
        </section>
    )
}