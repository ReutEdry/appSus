const {useState, useEffect} = React

export function SearchFilter({filterBy, onSetFilterBy}){
    const [filterByToEdit,setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
            onSetFilterBy(filterByToEdit)
    },[filterByToEdit])

    function handleChange({target}){
        const field = target.name
        let value = target.value
        console.log(value);
        console.log(field);
        switch (target.type) {
            case 'number':
                value = value || ''
                break;
            default:
                break;
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { search } = filterByToEdit
    return (
        <section className="mail-filter">
            <label htmlFor="search"></label>
            <input value={search} className="search-box" type="text" placeholder="Search mail" id="search" name="search" onChange={handleChange} />
            <span class="material-symbols-outlined">
                search
            </span>
            <img className="small-img" src="../../assets/img/saharImg.jpeg" alt="" />
        </section>
    )
}

