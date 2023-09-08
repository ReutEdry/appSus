export function TxtNote({ info }) {
    return (
        <article className="noteTxtP preview">
            {info.title && <h2>{info.title}</h2>}
            <h4>{info.txt}</h4>
        </article>
    )
}