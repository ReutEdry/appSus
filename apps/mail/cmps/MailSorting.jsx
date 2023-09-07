const {useState, useEffect} = React

export function MailSorting(){
    return (
        <section className='sorting-container'>
            <div>
                <span class="material-symbols-outlined">
                    inbox
                </span>
                Inbox
            </div>
            <div>
                <span class="material-symbols-outlined">
                    star
                </span>
                Starred
            </div>
            <div>
            <span class="material-symbols-outlined">
                send
            </span>  
                Sent   
            </div>
            <div>
            <span class="material-symbols-outlined">
                delete
            </span>
                Delete
            </div>
        </section>
    )
}