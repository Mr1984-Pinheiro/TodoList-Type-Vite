
import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

export type Todo = {
  id: number;
  title: string;
  completed: boolean
}

function App() {

  //conectar o input ao valor do estado - pegar valor da variavel
  const [todoInput, setTodoInput] = useState('');  
  const [todos, setTodos] = useState<Todo[]>([]); //<> é generic

  useEffect(() => {
    localStorage.setItem('@todoList:todos', JSON.stringify(todos));

  }, []);


  function addTodo () {
    //pegar variavel de input e jogar na lista de todos usando previous
    setTodos((previousTodos) =>
     [...previousTodos, { id: Math.random(), title: todoInput, completed: false }]
     );
    setTodoInput('');
  }

  function completeTodo (id: number) {
      setTodos((previousTodos) => 
      previousTodos.map(( todo ) => todo.id !== id ? todo : { ...todo, completed: !todo.completed}));
      setTodoInput('');
  }

  function handleInputChange (e: ChangeEvent<HTMLInputElement> ) {
    //Para alterar o valor estatico do input 
    setTodoInput(e.target.value);
  }

  function deleteTodo (id: number) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id ));
  }

  return (
    <div className="App">
      <div className='add-todo'>
        {/*conecar input ao estado precisa 2 atributos value e onChange */}
        <input placeholder='Fazer café' value={todoInput} onChange={handleInputChange} />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      {
         todos.map((todo) => (
           <Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
         ))
          
      }

      
      
    </div>
  )
}

export default App
