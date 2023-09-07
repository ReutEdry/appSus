const { Fragment } = React

export function ImgNote({ info }) {
    const { title, url } = info

    return (
        <article className="noteImgP preview">
            <h2>{title}</h2>
            <img src={url} />
        </article>
    )
}