const {useState} =React

export function MailCompose({isComposeOpen}){
    const [closeControl, setControl] = useState(true)


   function onSetCompose(){
        isComposeOpen(closeControl)
   }

    return (
        <section className="compose-modal">
            <form action="">
                <header className="compose-header">
                    <h1>New Message</h1>
                    <button className="compose-close-btn" onClick={onSetCompose}><i class="fa-solid fa-x"></i></button>
                </header>
                <input required type="text" placeholder="To:" />
                <input required type="text" placeholder="Subject" />
                <textarea required name="" id="" cols="50" rows="20"></textarea>
                <button className="submit-btn">Send</button>
            </form>
        </section>
    )
}