import {useContext} from "react";
import "../Styles/global.css";
import { global } from "./Context";

export default function MenuButton() {
    
    const {setModal,button,setButton} = useContext(global);

    if(button) {
    return(
        <div className="button">
            <button onClick={() => {setModal(true); setButton(null);}}><span>Рівень</span></button>
        </div>
    );
    } else {
        return null;
    }
}