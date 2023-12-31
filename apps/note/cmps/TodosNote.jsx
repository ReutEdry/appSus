import { noteService } from '../services/noteService.service.js'

export function TodosNote({ info, id: noteId }) {
    const { title, todos } = info

    function toTodoClick(id) {
        // console.log(id)
    }

    function onRemoveTodo(event, todos, todoId) {
        event.stopPropagation()
        noteService.removeTodo(todos, todoId, noteId)
    }

    return (
        <section className="todo-container preview">
            <h2>{title}</h2>
            <ul className="todoP">
                {
                    todos.map(todo => <li key={todo.id} onClick={() => toTodoClick(todo.id)}>{todo.txt}
                        <button className="todo-btn" onClick={(event) => onRemoveTodo(event, todos, todo.id)}><i className="delete-btn-todo 
                        material-icons-outlined">
                            close
                        </i></button></li>)
                }
            </ul>
        </section >
    )
}