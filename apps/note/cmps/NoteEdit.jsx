export function NoteEdit() {

    function onHandleChange() {

    }

    function onSaveUpdate() {

    }




    return (
        // <dialog>
        <form onSubmit={onSaveUpdate} className="edit-note-form">
            <textarea onChange={onHandleChange} name="title" id="title" cols="40" rows="1" placeholder="Title"></textarea>
            <textarea onChange={onHandleChange} name="txt" id="txt" cols="40" rows="2" placeholder="Your note"></textarea>
            <button className="save-form">Save</button>
        </form>
        // <button className="modal-close-btn btn">Close</button>
        // {/* </dialog> */}
    )
}

// style={{ backgroundColor: selectedColor }} ref={titleTextareaRef}
// style={{ backgroundColor: selectedColor }} ref={txtTextareaRef}

// function onClickOutside(ev, elDialog) {
//     const dialogDimensions = elDialog.getBoundingClientRect()
//     if (
//         ev.clientX < dialogDimensions.left ||
//         ev.clientX > dialogDimensions.right ||
//         ev.clientY < dialogDimensions.top ||
//         ev.clientY > dialogDimensions.bottom
//     ) {
//         elDialog.close()
//     }
// }


