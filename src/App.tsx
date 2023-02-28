
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

export type Todo = {
  id: number;
  title: string;
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); //<> é generic

  return (
    <div className="App">
      <div className='add-todo'>
        <input placeholder='Fazer café' />
        <button>Adicionar</button>
      </div>

      {
         todos.map((todo) => (
           <Card key={todo.id} todo={todo} />
         ))
          
      }

      
      
    </div>
  )
}

export default App
