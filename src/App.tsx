
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div>
        <input placeholder='Fazer café' />
        <button>Adicionar</button>
      </div>

      <Card title="Titulo qualaquer" />
      
    </div>
  )
}

export default App
