const {useState,useEffect} = React
const {useParams, useNavigate,Link} = ReactRouterDOM
import { mailService } from "../services/mail.service.js"; 

export function MailDetail() {
    const params = useParams();  
    const navigate = useNavigate()
    
    const [mail,setMail] = useState()
    
    useEffect(() => {
        mailService.get(params.mailId)
            .then(mail => setMail(mail))
    })


    function onBack(){
        navigate('/mail')
    }
    if (!mail) return <div>Loading...</div>;

    return (
        <li>
            <h2>{mail.subject}</h2>
            <p>From: {mail.from}</p>
            <p>To: {mail.to}</p>
            <div>{mail.body}</div>
            <button onClick={onBack}>Back</button>
        </li>
    );
}
