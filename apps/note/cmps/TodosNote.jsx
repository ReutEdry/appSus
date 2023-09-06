import { noteService } from '../services/noteService.service.js'

export function TodosNote({ info }) {
    const { title, todos } = info

    function toTodoClick(id) {
        console.log(id)
    }

    function onRemoveTodo(event, todos, todoId) {
        event.stopPropagation()
        noteService.removeTodo(todos, todoId)

    }

    return (
        <section className="todo-container">
            <h2>{title}</h2>
            <ul className="todoP preview">
                {
                    todos.map(todo => <li key={todo.id} onClick={() => toTodoClick(todo.id)}>{todo.txt}
                        <button onClick={(event) => onRemoveTodo(event, todos, todo.id)}>x</button></li>)
                }
            </ul>
            <button>delete</button>
            <button>update</button>
            <button>bgc color</button>
            <button>pin</button>
            <button>send to email</button>
        </section >
    )
}