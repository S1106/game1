import {useContext} from "react";
import "../Styles/global.css";
import { global } from "./Context";

export default function MenuButton() {
    
    const {setModal,button,setButton} = useContext(global);

    // console.log(button);

    if(button) {
    return(
        <div className="button">
            <button onClick={() => {setModal(true); setButton(null);}}>Рівень</button>
        </div>
    );
    } else {
        return null;
    }
}