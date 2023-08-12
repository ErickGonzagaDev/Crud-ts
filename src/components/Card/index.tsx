// ***********************************
// |          Import Css             |
// ***********************************

import { Todo } from "../../App"

import "./styles.css"

type CardProps = {
    todo: Todo
    completeTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const Card = ({ todo, completeTodo, deleteTodo }: CardProps) => {
    return (
        <div className={`card ${todo.completed ? "done" : ""}`}>
            <h2>{todo.title}</h2>
            <div className="card-buttons">
                <button onClick={() => completeTodo(todo.id)}>{todo.completed ? "Retomar" : "Completar"}</button>
                <button onClick={() => deleteTodo(todo.id)}>Deletar</button>
            </div>
        </div>
    )
}

export default Card