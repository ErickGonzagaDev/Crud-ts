import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

export type Todo = {
  id: number
  title: string
  completed: boolean
}

function App() {

  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('@todoList:todos')
    if (storedTodos) {
      return JSON.parse(storedTodos)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem("@todoList:todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Math.random(), title: todoInput, completed: false }])

    setTodoInput("")
  }


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTodoInput(value)
    console.log(todoInput)

  }

  const completeTodo = (id: number) => {
    setTodos((prev) => prev.map(todo => todo.id !== id ? todo : { ...todo, completed: !todo.completed }))
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div>
        <div className='add-todo'>

          <input type="text" placeholder='Fazer café' value={todoInput} onChange={handleInputChange} />
          <button onClick={addTodo}>Adicionar</button>
        </div>
      </div>

      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      ))}

    </>
  )
}

export default App
