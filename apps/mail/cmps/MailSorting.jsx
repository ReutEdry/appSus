const {useState, useEffect} = React

export function MailSorting(){
    return (
        <section className='sorting-container'>
            <div>Read</div>
            <div>UnRead</div>
            <div>Starred</div>
            <div>Deleted</div>
        </section>
    )
}