export function ImgNote({ info }) {
    const { title, url } = info

    return (
        <article className="noteImgP preview">
            <h2>{title}</h2>
            <img src={url} />
            <button>delete</button>
            <button>update</button>
            <button>bgc color</button>
            <button>pin</button>
            <button>send to email</button>
        </article>
    )
}