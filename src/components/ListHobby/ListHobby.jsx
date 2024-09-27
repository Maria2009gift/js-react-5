
import { List } from "./ListHobby.js"
import { Card } from "../CardHobby/Card.jsx"

export const ListHobby = ({ hobbies }) => {
    return (
        
            <List>
                {hobbies.map(hobby => 
                    <li key={hobby.id}>
                        <Card hobby={hobby}/>
                    </li>
                )}
            </List>
        
    )
}














