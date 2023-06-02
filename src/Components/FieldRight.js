import { useContext } from "react";
import { global } from "./Context";
import Card from "./Card";

export default function FieldRight ({end}) {

    const {level} = useContext(global);

    const generateField = (t) => {
        return (
            `${t} field_${level}`
        )
    }
    
    if(end !== null && end !== undefined) {
        return(
            <div className = {generateField('field_right')}>                
                {end.map((elem,index) => <Card 
                                                elem = {elem}
                                                key = {index}
                />)
                }
            </div>
        )
        } else {
            return null;
        }
    }