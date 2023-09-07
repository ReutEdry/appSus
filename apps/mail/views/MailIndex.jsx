const {useState,useEffect} = React
import { mailService } from '../services/mail.service.js';
import { MailList } from '../cmps/MailList.jsx';
import { SearchFilter } from '../cmps/SearchFilter.jsx';
import { MailSorting } from '../cmps/MailSorting.jsx';


export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy,setFilterBy] = useState(mailService.getDefaultFilter())
    const [toggleToolBar, setToggle] = useState(false)
    

    useEffect(() => {
        mailService.query(filterBy)
            .then(mailsFromService => setMails(mailsFromService));
    }, [filterBy])

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

    function onSetFilterBy(filterBy){  
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function toggleFolders(){
        setToggle(!toggleToolBar)
    }


    return (

        <section className={ `main-layout ${toggleToolBar ? 'open' : 'close'}`}>
            <MailSorting toggleToolBar={toggleToolBar} />
            <header className="main-mail-header">
                <article class="mail-logo">
                    <button onClick={toggleFolders}><i class="fa-solid fa-bars"></i></button>
                    <img className="logo-img" src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg" alt="" />
                    <span>Gmail</span>
                </article>
                <SearchFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/>
            </header>
            <MailList setMail={setMails} mails={mails} onRemoveMail={onRemoveMail} onStarSelect={onStarSelect} />
            
        </section>
       
    )
}





