import { Todo } from '../../App';
import './styles.css'

type CardProps = {
    todo: Todo
}

function Card ({ todo }: CardProps) {
    return(
        <div className="card">
            <h2>{todo.title}</h2>

            <div className="card-buttons">
                 <button>Completar</button>
                 <button>Deletar</button>
            </div>
            
        </div>
    )
}

export default Card;