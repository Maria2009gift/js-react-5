
import { Article, Title } from "./Card"

export const Card = ({ hobby }) => {
    return (
        <Article>
            <Title>{hobby.name}</Title>
            <img src={hobby.image} alt=""></img>
            <p>{hobby.description}</p>
        </Article>
    )
}










