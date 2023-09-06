export function TxtNote({ info }) {
    return (
        <article className="noteTxtP preview">
            <h2>{info.txt}</h2>
            <button>delete</button>
            <button>update</button>
            <button>bgc color</button>
            <button>pin</button>
            <button>send to email</button>
        </article>
    )
}