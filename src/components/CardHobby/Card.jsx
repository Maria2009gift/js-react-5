
import style from './Card.module.css'

export const Card = ({ hobby }) => {
    return (
        <article className={style.article}>
            <h2 className={style.title}>{hobby.name}</h2>
            <img src={hobby.image} alt="" className={style.image}></img>
            <p>{hobby.description}</p>
        </article>
    )
}










