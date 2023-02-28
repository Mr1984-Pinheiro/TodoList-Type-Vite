import './styles.css'

type CardProps = {
    title: string
}

function Card ({ title }: CardProps) {
    return(
        <div className="card">
            <h2>Fazer Café com fé</h2>

            <div className="card-buttons">
                 <button>Completar</button>
                 <button>Deletar</button>
            </div>
            
        </div>
    )
}

export default Card;