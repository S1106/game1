import {useContext} from "react";
import "../Styles/modal.css";
import { global } from "./Context";

export default function Modal() {

    const {setModal,modal,setLevel,setButton,setArrRight,setCurrentElem,setTimer,setTimerHour} = useContext(global);

    if (modal){ return (
        <div className="overlay" onClick={() => {setModal(null); setButton(true)}}>
            <div className="modal">
            <div className="gameBox">
                <div className="gameContainer">
                    <p className="namelenta">Оберіть рівень</p>
                    <p className="gameP" onClick={()=>{setLevel('one'); setModal(null); setButton(null); setArrRight([]); setTimer(0);setTimerHour(0);setCurrentElem(null)}}>2x2</p>
                    <p className="gameP" onClick={()=>{setLevel('two'); setModal(null); setButton(null); setArrRight([]); setTimer(0);setTimerHour(0);setCurrentElem(null)}}>3x3</p>
                    <p className="gameP" onClick={()=>{setLevel('three'); setModal(null); setButton(null); setArrRight([]); setTimer(0);setTimerHour(0);setCurrentElem(null)}}>4x4</p>
                </div>
            </div>
        </div>
            </div>
    );} else {
        return null;
    }
}