export function SearchNoteFilter() {

    return (
        <section className="note-filter">
            <label htmlFor="search"></label>
            <input type="text" id="search" name="search" placeholder="Search for a note" />
            <i className="material-icons-outlined">
                search</i>
            <img className="small-img" src="assets/img/reutImg.jpg" alt="" />
        </section>
    )
}

