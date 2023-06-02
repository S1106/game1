import {useContext} from "react";
import { global } from "./Context";
import Card from "./Card";

export default function FieldLeft({start}) {

    const {level} = useContext(global);

    const generateField = (t) => {
        return (
            `${t} field_${level}`
        )
    }

        if(start !== null && start !== undefined) {
        return(
            <div className = {generateField('field_left')}>                
                {start.map((elem,index) => <Card 
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