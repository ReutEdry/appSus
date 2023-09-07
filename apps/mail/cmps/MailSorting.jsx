const {useState, useEffect} = React



export function MailSorting({toggleToolBar}){
    return (
        <section className='sorting-container'>
            <ul className="sorting-list">
            <li className="compose">
                <span class="material-symbols-outlined">
                    edit
                </span>
                {!toggleToolBar && "Compose"}
            </li>
            <li>
                <span class="material-symbols-outlined">
                    inbox
                </span>
                {!toggleToolBar && "Inbox"}
            </li>
            <li>
                <span class="material-symbols-outlined">
                    star
                </span>
                {!toggleToolBar && "Starred"}
            </li>
            <li>
            <span class="material-symbols-outlined">
                send
            </span>  
                {!toggleToolBar && "Sent"}
            </li>
            <li>
            <span class="material-symbols-outlined">
                delete
            </span>
                {!toggleToolBar && "Trash"}
            </li>
            </ul>
        </section>
    )
}