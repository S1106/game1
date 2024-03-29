import { useContext } from "react";
import { global } from "./Context";
import "../Styles/global.css";

export default function Timer() {

    const {timer,timerHour,resultCount} = useContext(global);
    
    return(
        <div className="timer">{
           `${timerHour.toString().padStart(2, '0')}:${timer.toString().padStart(2, '0')}` 
        }
            <div className="navi">
                <div className="container">
                    <a href="#">Contacts</a>
                    <a href="#">Partnership</a>
                    <a href="#">Pricelist</a>
                    <p className="naviDescription">Navihation</p>
                </div>
            </div>
            <div className="resultCount">{resultCount}</div>
        </div>

        
    );
}


        // setInterval(() => {
        //     //let date = new Date();
        //     //clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        //     let clock = document.querySelector(".timer");
        // },1000)
