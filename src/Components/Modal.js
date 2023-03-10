import {useContext} from "react";
import "../Styles/modal.css";
import { global } from "./Context";

export default function Modal() {

    const {setModal,modal,setLevel,setButton} = useContext(global);

    if (modal){ return (
        <div className="overlay" onClick={() => {setModal(null); setButton(true)}}>
            <div className="modal">
            <div className="gameBox">
                <div className="gameContainer">
                    <p className="namelenta">Оберіть рівень</p>
                    <p className="gameP" onClick={()=>{setLevel(2); setModal(null); setButton(null)}}>2x2</p>
                    <p className="gameP" onClick={()=>{setLevel(3); setModal(null); setButton(null)}}>3x3</p>
                    <p className="gameP" onClick={()=>{setLevel(4); setModal(null); setButton(null)}}>4x4</p>
                </div>
            </div>
        </div>
            </div>
    );} else {
        return null;
    }
}