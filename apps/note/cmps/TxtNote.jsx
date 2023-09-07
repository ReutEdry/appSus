export function TxtNote({ info }) {
    return (
        <article className="noteTxtP preview">
            {info.title && <h1>{info.title}</h1>}
            <h2>{info.txt}</h2>
        </article>
    )
}