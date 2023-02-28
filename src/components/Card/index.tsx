type CardProps = {
    title: string
}

function Card ({ title }: CardProps) {
    return(
        <div>{title} </div>
    )
}

export default Card;