import { ImgNote } from "./ImgNote.jsx";
import { TodosNote } from "./TodosNote.jsx";
import { TxtNote } from "./TxtNote.jsx";


export function DynamicNote(props) {
    switch (props.type) {
        case 'NoteTxt':
            return <TxtNote {...props} />;
        case 'NoteImg':
            return <ImgNote {...props} />;
        case 'NoteTodos':
            return <TodosNote {...props} />;
        default:
            return null;
    }
}