
import style from './ListHobby.module.css'
import { Card } from "../CardHobby/Card.jsx"

export const ListHobby = ({ hobbies }) => {
    return (
        
            <ul className={style.list}>
                {hobbies.map(hobby => 
                    <li key={hobby.id}>
                        <Card hobby={hobby}/>
                    </li>
                )}
            </ul>
        
    )
}














